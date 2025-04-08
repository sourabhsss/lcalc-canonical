
import React from 'react';
import { SelectField } from './FormFields';

interface ContextInputsProps {
  timeOfSnowfall: string;
  dayOfWeek: string;
  schoolDistrict: string;
  region: string;
  setTimeOfSnowfall: (value: string) => void;
  setDayOfWeek: (value: string) => void;
  setSchoolDistrict: (value: string) => void;
  setRegion: (value: string) => void;
}

const ContextInputs: React.FC<ContextInputsProps> = ({
  timeOfSnowfall,
  dayOfWeek,
  schoolDistrict,
  region,
  setTimeOfSnowfall,
  setDayOfWeek,
  setSchoolDistrict,
  setRegion
}) => {
  return (
    <>
      <SelectField
        id="timeOfSnowfall"
        label="Time of Snowfall"
        value={timeOfSnowfall}
        onValueChange={setTimeOfSnowfall}
        options={[
          { value: 'morning', label: 'Morning' },
          { value: 'afternoon', label: 'Afternoon' },
          { value: 'overnight', label: 'Overnight' }
        ]}
      />
      
      <SelectField
        id="dayOfWeek"
        label="Day of Week"
        value={dayOfWeek}
        onValueChange={setDayOfWeek}
        options={[
          { value: 'Monday', label: 'Monday' },
          { value: 'Tuesday', label: 'Tuesday' },
          { value: 'Wednesday', label: 'Wednesday' },
          { value: 'Thursday', label: 'Thursday' },
          { value: 'Friday', label: 'Friday' },
          { value: 'Saturday', label: 'Saturday' },
          { value: 'Sunday', label: 'Sunday' }
        ]}
      />
      
      <SelectField
        id="schoolDistrict"
        label="School District Type"
        value={schoolDistrict}
        onValueChange={setSchoolDistrict}
        options={[
          { value: 'rural', label: 'Rural' },
          { value: 'suburban', label: 'Suburban' },
          { value: 'urban', label: 'Urban' }
        ]}
      />
      
      <SelectField
        id="region"
        label="Region"
        value={region}
        onValueChange={setRegion}
        options={[
          { value: 'northeast', label: 'Northeast' },
          { value: 'midwest', label: 'Midwest' },
          { value: 'south', label: 'South' },
          { value: 'west', label: 'West' }
        ]}
      />
    </>
  );
};

export default ContextInputs;
