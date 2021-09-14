import React, {useContext, useEffect, useState} from 'react';
import {findWithProp, remove} from '../services/utils';
export const TimelineContext = React.createContext();

const mockTimelineEntries = [
  {
    id: 1,
    date: '21.12.2021.',
    feeling: 'Well',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 2,
    date: '21.12.2021.',
    feeling: 'Unwell',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 3,
    date: '21.12.2021.',
    feeling: 'Not great',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 4,
    date: '21.12.2021.',
    feeling: 'Not great',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 5,
    date: '21.12.2021.',
    feeling: 'Not great',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 6,
    date: '21.12.2021.',
    feeling: 'Not great',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 7,
    date: '21.12.2021.',
    feeling: 'Not great',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
  {
    id: 8,
    date: '21.12.2021.',
    feeling: 'Not great',
    conditions: ['Itchiness', 'Fuzziness', 'Butterflies'],
  },
];

export default function TimelineProvider({children}) {
  const [timelineEntries, setTimelineEntries] = useState(mockTimelineEntries);

  const addTimelineEntry = entry => {
    setTimelineEntries([...timelineEntries, entry]);
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
      }}>
      {children}
    </TimelineContext.Provider>
  );
}
