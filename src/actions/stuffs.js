import database, {storage} from '../firebase/firebase.js';

// ADD_STUFF
export const addStuff = (stuff) => ({
    type: 'ADD_STUFF',
    stuff
})

export const startAddStuff = (id, stuffData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const eventId = id;
    const {
      stuff = '',
      subtitle = '',
      amount = '',
      description = '',
      url = '',
      imageName = ''
    } = stuffData;
    const stuffObj = { stuff, subtitle, amount,  description, url, imageName }
    database.ref(`users/${uid}/stuffs/${eventId}/`).push(stuffObj).then((ref) => {
      dispatch(addStuff({
        parent_id: eventId,
        id: ref.key,
        ...stuffObj
      }))
    })
  }
}

// SET_STUFFS
export const setStuffs = (stuffs) => ({
  type: 'SET_STUFFS',
  stuffs
})

export const startSetStuffs = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stuffs/`).once('value').then((snapshot) => {
      const stuffs = [];
      snapshot.forEach((childSnapshot) => {
        childSnapshot.forEach((child) => {
           stuffs.push({
            parent_id: childSnapshot.key,
            id: child.key,
            ...child.val()
          })
        })
      })
      dispatch(setStuffs(stuffs))
    })
  }
};

// REMOVE_STUFF

export const removeStuff = ({ id = '' } = {}) => ({
  type: 'REMOVE_STUFF',
  id
})

export const startRemoveStuff = (id, eventId = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/stuffs/${eventId}/${id}`).remove().then(() => {
     dispatch(removeStuff({id}))
   })
  }
}
