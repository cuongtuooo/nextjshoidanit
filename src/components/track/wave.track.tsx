'use client';
import { useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const WaveTrack = () => {

    const searchParams = useSearchParams()
    const fileName = searchParams.get('audio')
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let i = 0;
        i++;
        console.log("check contannerref.currentr", containerRef.current);
        if (containerRef.current) {
            const wavesurfer = WaveSurfer.create({
                container: containerRef.current,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: `/api?audio=${fileName}`,
            })
        }
    }, []);

    return (
        <div ref={containerRef}>
            wave track
        </div>
    )
}

export default WaveTrack;