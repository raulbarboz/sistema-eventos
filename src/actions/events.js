import database, {storage} from '../firebase/firebase.js';

// ADD_EVENT
export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
})

export const startAddEvent = (eventData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      event = '',
      subtitle = '',
      description = '',
      url = '',
      imageName,
      startDate = 0,
      endDate = 0
    } = eventData;
    const eventObj = { event, subtitle, description, url, imageName, startDate, endDate }
    database.ref(`users/${uid}/events`).push(eventObj).then((ref) => {
      dispatch(addEvent({
        id: ref.key,
        ...eventObj
      }))
    })
  }
}

// REMOVE_EVENT
export const removeEvent = ({ id = '' } = {}) => ({
    type: 'REMOVE_EVENT',
      id
})

// START REMOVE EVENT
export const startRemoveEvent = ({ id = '', imageName = '' } = {}) => {
  return (dispatch, getState) => {
  const uid = getState().auth.uid;
   return database.ref(`users/${uid}/events/${id}`).remove().then(() => {
     storage.ref(`images/${imageName}`).delete().then(() => {
     }).catch((error) => {
       console.warn('error: ', error)
     })
     dispatch(removeEvent({id}))
   })
  }
}

// EDIT_EVENT
export const editEvent = ( id, updates ) => ({
    type: 'EDIT_EVENT',
      id,
      updates
})

// START EDIT EVENT
export const startEditEvent = ( id, updates ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/events/${id}`).update({
      ...updates
    }).then(() => {
      dispatch(editEvent(id, updates));
    })
  }
}

// SET_EVENTS
export const setEvents = (events) => ({
  type: 'SET_EVENTS',
  events
})

export const startSetEvents = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/events`).once('value').then((snapshot) => {
      const events = [];
      snapshot.forEach((childSnapshot) => {
        events.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setEvents(events))
    })
  }
};

