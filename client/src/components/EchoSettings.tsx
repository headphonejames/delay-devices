import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const EchoSettings = () => {
    const [delayMs, setDelayMs] = useState(1000);

    const setDelay = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDelayMs(parseInt(event.target.value));
    }

    const startEcho = () => {
        console.log(delayMs)
    }

    return (
        <>
            <h1>{delayMs}</h1>
            <TextField placeholder={delayMs.toString()} onChange={setDelay} />
            <Button variant="contained" onClick={startEcho}>Start echo</Button>

        </>
    );
};

export default EchoSettings;