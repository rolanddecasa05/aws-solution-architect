import FaultyTerminal from './components/FaultyTerminal'
import SplitText from './components/SplitText'
import TextType from './components/TextType'

function App() {
  const hostname = window.location.hostname

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
          
          {/* Fixed-height block row so the typing effect cannot shift it */}
          <div className="flex min-h-16 flex-col items-center justify-center">
            <SplitText
              text="Hello Solutions Architect!"
              className="text-2xl font-semibold text-white"
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
            <p className="mt-1 text-xs font-medium tracking-wide text-gray-500">
              {hostname || 'unknown host'}
            </p>
          </div>

          {/* Reserved block row for the typing subtitle */}
          <div className="mt-6 flex min-h-16 items-start justify-center">
            <TextType
              as="p"
              className="m-0 text-lg font-bold text-gray-300"
              text={[
                'Sharpen your skills and stay ahead of the curve!',
                'Design scalable systems on AWS.',
                'Automate your workflows.',
                'Master cloud architecture patterns.',
                'Embrace AI and serverless technologies.',
                'Paldo!!!!!',
              ]}
              typingSpeed={55}
              deletingSpeed={25}
              pauseDuration={1400}
              variableSpeed={{ min: 40, max: 80 }}
              showCursor
              cursorCharacter="|"
              cursorClassName="text-cyan-400"
              textColors={['#e5e7eb', '#22d3ee', '#a78bfa']}
              startOnVisible
            />
          </div>

        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-gray-400">
          <p>© 2024 Roland De Casa. All rights reserved.</p>
           
          
        </div>
      </div>
    </div>
  )
}

export default App
