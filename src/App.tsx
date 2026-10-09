import FaultyTerminal from './components/FaultyTerminal'
import SplitText from './components/SplitText'

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Animated terminal-rain style background */}
      <div className="absolute inset-0">
        <FaultyTerminal
          tint="#22d3ee"
          scale={1.2}
          gridMul={[2, 1]}
          digitSize={1.5}
          timeScale={0.3}
          scanlineIntensity={0.3}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          curvature={0.2}
          mouseReact
          mouseStrength={0.2}
          pageLoadAnimation
          brightness={1}
          lightMode={false}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="h-1/2 w-1/4 rounded-lg border border-gray-700/70 bg-gray-900/60 p-8 pt-8 text-center shadow-lg backdrop-blur-md">
          <SplitText
            text="Hello Solutions Architect!"
            className="mb-4 text-4xl font-bold text-white"
            delay={60}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="center"
            onLetterAnimationComplete={() => {}}
          />
          <p className="text-gray-300">Sharpen your skills and stay ahead of the curve!</p>
        </div>
      </div>
    </div>
  )
}

export default App
