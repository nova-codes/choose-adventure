import useSound from 'use-sound';


function soundButton() {
    const soundUrl = 'A Theme For The Forest (8bit music) (192 kbps).mp3';
  
    const [play, { stop, isPlaying }] = useSound(soundUrl);
  
    return (
      <PlayButton
        active={isPlaying}
        size={60}
        iconColor="var(--color-background)"
        idleBackgroundColor="var(--color-text)"
        activeBackgroundColor="var(--color-primary)"
        play={play}
        stop={stop}
      />
    );
  }