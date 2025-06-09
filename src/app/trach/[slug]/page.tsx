'use client'
import { useSearchParams } from 'next/navigation'
const DetailTrackPage = (props: any) => {
    const searchParams = useSearchParams()

    const search = searchParams.get('audio')
    console.log("Check searct", search);
    return (
        <div>
            detail track
        </div>
    )
}

export default DetailTrackPage;