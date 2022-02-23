import { difference, isEmpty, merge, cloneDeep } from "lodash";
import { arrayToObj } from "./format-obj-array";

export default function createReducerList(
  listName,
  listState,
  customMethods = {}
) {
  const output = {
    reset(state) {
      state[listName] = cloneDeep(listState);
    },

    get(state, action) {
      const entry = action.payload;
      const byId = { [entry.id]: entry };
      const allIds = [entry.id];
      state[listName] = { byId, allIds };
    },

    getMultiple(state, action) {
      const entries = action.payload;
      const byId = arrayToObj(entries);
      const allIds = Object.keys(byId);
      state[listName] = { byId, allIds };
    },

    push(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entry = action.payload;
      state[listName] = {
        byId: { ...byId, [entry.id]: entry },
        allIds: [...allIds, entry.id],
      };
    },

    pushMultiple(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entries = action.payload;
      state[listName] = {
        byId: merge(byId, entries),
        allIds: merge(allIds, Object.keys(byId)),
      };
    },

    update(state, action) {
      const { byId } = state[listName];
      const entry = action.payload;
      const { id } = entry;
      byId[id] = entry;
    },
    updateMultiple(state, action) {
      const { byId } = state[listName];
      const entries = action.payload;
      merge(byId, entries);
    },

    delete(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entryId = action.payload;
      delete byId[entryId];
      state[listName] = {
        byId,
        allIds: allIds.filter((_entryId) => _entryId !== entryId),
      };
    },

    deleteMultiple(state, action) {
      const { byId, allIds } = cloneDeep(state[listName]);
      const entryIds = action.payload;
      entryIds.forEach((id) => {
        delete byId[id];
      });
      state[listName] = { byId, allIds: difference(allIds, entryIds) };
    },
  };

  if (!isEmpty(customMethods)) return { ...output, ...customMethods };
  return output;
}
