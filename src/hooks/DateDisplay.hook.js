import { useState, useEffect } from 'react';

export default function useDateDisplay(now) {
    const [ currentTime, setTime ] = useState(now);

    function getFormattedDate() {
        return currentTime.toLocaleString('en-AU', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 999);

        return ()=> {
            clearTimeout(timer);
        };
    }, [now]);

    return getFormattedDate();
}
