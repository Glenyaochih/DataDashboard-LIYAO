import { PulseLoader } from 'react-spinners';

interface ScreenLoadingProps {
  loadingSource: boolean; // 或是根據你的邏輯可能是 any/string
  color?: string; // 加問號表示非必填
  size?: number; // 加問號表示非必填
}
export default function ScreenLoading({
  loadingSource,
  color,
  size,
}: ScreenLoadingProps) {
  return (
    <>
      {loadingSource && (
        <div
          className='d-flex justify-content-center align-items-center'
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(255,255,255,0.6)',
            zIndex: 9999,
          }}
        >
          <PulseLoader
            loading={true}
            color={color}
            size={size}
            aria-label='Loading Spinner'
            data-testid='loader'
          />
        </div>
      )}
    </>
  );
}
