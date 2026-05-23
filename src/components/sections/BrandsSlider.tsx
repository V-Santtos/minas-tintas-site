import { InfiniteSlider }   from '@/components/ui/infinite-slider'
import { ProgressiveBlur }  from '@/components/ui/progressive-blur'

const brands = [
  'Maza',
  'Farben',
  'Vonixx',
  'Condor',
  'Impertech',
  'Lazzudur',
  'Sherwin-Williams',
]

export default function BrandsSlider() {
  return (
    <div style={{ position: 'relative', backgroundColor: '#F7F5F2', padding: '40px 0' }}>
      <InfiniteSlider gap={96} duration={30} durationOnHover={60}>
        {brands.map((brand) => (
          <span
            key={brand}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px, 2vw, 24px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: '#C8C4BF',
              whiteSpace: 'nowrap',
              userSelect: 'none',
            }}
          >
            {brand}
          </span>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        direction='left'
        blurLayers={6}
        blurIntensity={0.8}
        className='pointer-events-none absolute inset-y-0 left-0 w-32'
      />
      <ProgressiveBlur
        direction='right'
        blurLayers={6}
        blurIntensity={0.8}
        className='pointer-events-none absolute inset-y-0 right-0 w-32'
      />
    </div>
  )
}
