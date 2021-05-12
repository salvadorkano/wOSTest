import {useStore} from '../store';
import * as Actions from '_context/actions/testActions';
import {TestServices} from '_services/';

export const useTest = () => {
  const [state, dispatch] = useStore();

  const {users, album} = state;

  const getUsers = () => {
    return new Promise((resolve, reject) => {
      dispatch(Actions.users());
      TestServices.users()
        .then(res => {
          if (res) {
            dispatch(Actions.usersSuccess(res));
            resolve(res);
          } else {
            dispatch(Actions.usersError());
            reject(res);
          }
        })
        .catch(err => {
          console.log('err hooks', err);
          dispatch(Actions.usersError(err));
          if (err == 'Error: Request failed with status code 404') reject(404);
          else reject('fail-conexion');
        });
    });
  };

  const getAlbums = () => {
    return new Promise((resolve, reject) => {
      dispatch(Actions.album());
      TestServices.albums()
        .then(res => {
          if (res) {
            dispatch(Actions.albumSuccess(res));
            resolve(res);
          } else {
            dispatch(Actions.albumError());
            reject(res);
          }
        })
        .catch(err => {
          console.log('err hooks', err);
          dispatch(Actions.albumError(err));
          if (err == 'Error: Request failed with status code 404') reject(404);
          else reject('fail-conexion');
        });
    });
  };

  const actionsTest = {
    getUsers,
    getAlbums
  };

  return {users, album, actionsTest};
};
