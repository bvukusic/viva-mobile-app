import React, {useContext, useEffect, useState} from 'react';
import {
  fetchTimelineEntries,
  postTimelineEntry,
} from '../services/timeline.service';
import {findWithProp, remove} from '../services/utils';
export const TimelineContext = React.createContext();

export default function TimelineProvider({children}) {
  const [timelineEntries, setTimelineEntries] = useState([]);
  const [loadingTimeline, setLoadingTimeline] = useState(true);

  const getTimelineEntries = async token => {
    setLoadingTimeline(true);
    const timelineEntriesResponse = await fetchTimelineEntries(token);
    setTimelineEntries(timelineEntriesResponse.reverse());
    setLoadingTimeline(false);
  };

  const addTimelineEntry = async(token, mood, date, note) => {
    setLoadingTimeline(true);
    await postTimelineEntry(token, mood, date, note);
    await getTimelineEntries(token);
    setLoadingTimeline(false);
  };

  const removeTimelineEntry = entry => {
    const index = findWithProp(timelineEntries, 'id', entry.id);
    if (index > -1) {
      let editedArray = remove(timelineEntries, index);
      setTimelineEntries(editedArray);
    }
  };

  return (
    <TimelineContext.Provider
      value={{
        timelineEntries,
        addTimelineEntry,
        removeTimelineEntry,
        getTimelineEntries,
        addTimelineEntry,
        loadingTimeline,
      }}>
      {children}
    </TimelineContext.Provider>
  );
}
