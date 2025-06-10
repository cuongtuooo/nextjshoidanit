'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { useSearchParams } from 'next/navigation';

// WaveSurfer hookAdd commentMore actions
const useWavesurfer = (containerRef: any, options: any) => {
    const [wavesurfer, setWavesurfer] = useState<any>(null)

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!containerRef.current) return

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        })

        setWavesurfer(ws)

        return () => {
            ws.destroy()
        }
    }, [options, containerRef])

    return wavesurfer
}

const WaveTrack = () => {

    const searchParams = useSearchParams();
    const fileName = searchParams.get('audio');
    const containerRef = useRef<HTMLDivElement>(null);

    const optionsMemo = useMemo(() => {
        return {
            waveColor: 'rgb(200, 0, 200)',
            progressColor: 'rgb(100, 0, 100)',
            url: `/api?audio=${fileName}`,
        }
    }, [])

    // useEffect(() => {
    //     let i = 0;
    //     i++;
    //     console.log("check contannerref.currentr", containerRef.current);
    //     if (containerRef.current) {
    //         const wavesurfer = WaveSurfer.create({
    //             container: containerRef.current,
    //             waveColor: 'rgb(200, 0, 200)',
    //             progressColor: 'rgb(100, 0, 100)',
    //             url: `/api?audio=${fileName}`,
    //         })
    //     }
    // }, []);

    const wavesurfer = useWavesurfer(containerRef, optionsMemo);

    return (
        <div ref={containerRef}>
            wave track
        </div>
    )
}

export default WaveTrack;