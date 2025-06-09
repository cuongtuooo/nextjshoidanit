'use client';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useHasMounted } from '@/utils/customHook';
const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function AppFooter() {
    const hasMounted = useHasMounted();
    if (!hasMounted) return (<></>)//fragment 

    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: '#f2f2f2' }}>
            <Container sx={{ display: "flex", gap: 10 }}>
                <AudioPlayer
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/hoidanit.mp3`}
                    volume={0.5}
                    style={{ boxShadow: 'unset', background: "#f2f2f2" }}
                // Try other props!
                />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    minWidth: 100
                }}>
                    <div style={{ color: "#ccc" }}>Eric</div>
                    <div style={{ color: "black" }}>Who am I ?</div>
                </div>
            </Container>

        </AppBar>

    );
}