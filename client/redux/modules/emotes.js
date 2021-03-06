// @flow

import type { Emote, UniqueEmote } from '../../types';

const ADD_EMOTE = 'ADD_EMOTE';
const REMOVE_EMOTE = 'REMOVE_EMOTE';

export type EmotesState = {
  +emotes: UniqueEmote[]
};

type AddEmoteAction = { type: 'ADD_EMOTE', payload: { emote: UniqueEmote } };
type RemoveEmoteAction = { type: 'REMOVE_EMOTE', payload: { uuid: number } };
export type EmotesAction = AddEmoteAction | RemoveEmoteAction;

export type Dispatch = (action: EmotesAction | ThunkAction) => any;
type GetState = () => EmotesState;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

const initialState: EmotesState = {
  emotes: []
};

export default function reducer(
  state: EmotesState = initialState,
  action: EmotesAction
): EmotesState {
  switch (action.type) {
    case ADD_EMOTE:
      return {
        emotes: state.emotes.concat(action.payload.emote)
      };
    case REMOVE_EMOTE:
      return {
        emotes: state.emotes.filter((emote: UniqueEmote) => {
          return emote.uuid !== action.payload.uuid;
        })
      };
    default:
      // Have flow validate that every type of action has been handled.
      (action: empty);

      return state;
  }
}

let nextIndex = 0;

export function addEmote(emote: Emote, x: number, y: number): ThunkAction {
  return (dispatch) => {
    const newIndex = nextIndex++;

    const newEmote: UniqueEmote = {
      ...emote,
      uuid: newIndex,
      position: { x, y }
    };

    dispatch({
      type: ADD_EMOTE,
      payload: {
        emote: newEmote
      }
    });

    setTimeout(() => {
      dispatch(removeEmote(newIndex));
    }, 5000);
  };
}

export function removeEmote(uuid: number): RemoveEmoteAction {
  return {
    type: REMOVE_EMOTE,
    payload: {
      uuid
    }
  };
}
