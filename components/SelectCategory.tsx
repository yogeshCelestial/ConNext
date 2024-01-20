import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface SelectCategoryProps {
    category: string;
    setCategory: (category: string) => void;
}

export default function SelectCategory({ category, setCategory }: SelectCategoryProps) {
    const categories = ['india', 'food', 'travel', 'lifestyle', 'technology'];

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontWeight: 'bold', color: 'black' }}>Category</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                value={category}
                onChange={(e) => handleSelect(e)}
            >
                {categories.map((cat) => (
                    <FormControlLabel key={cat} value={cat} control={<Radio />} label={cat} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}