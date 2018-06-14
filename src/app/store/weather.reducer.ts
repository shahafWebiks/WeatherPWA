// import {WeatherState} from './weather.state';
// import * as WeatherAction from './weather.action';
// import {tassign} from 'tassign';
// import {Weather} from '../weather';
//
// export type Action = WeatherAction.GetAll;
// const defaultState: WeatherState = {
//   weather: new Weather();
// }
// ;
//
// export function WeatherReducer(state = defaultState, action: Action) {
//   switch (action.type) {
//     case WeatherAction.NEW_WEATHER:
//       return tassign(state, {weather: [...state.weather, action.payload]});
//
//
//     default:
//       return state;
//   }
// }
