import UseSound from 'use-sound';

function SoundButton() {
  const soundUrl = "../../../public/images/theme.mp3"

  const [play, { stop, isPlaying }] = UseSound(soundUrl);

  function handleClick() {
    play()
  }

  return (
    <button onClick={handleClick}>testtest
    
      {/* active={isPlaying}
      size={60}
      iconColor="var(--color-background)"
      idleBackgroundColor="var(--color-text)"
      activeBackgroundColor="var(--color-primary)"
      play={play}
      stop={stop}  */}
      </button>
  );
}

export default SoundButton; 