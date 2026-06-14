type ProgressBarProps = {
  value: number;
};

type MicLevelMeterProps = {
  level: number;
};

type ToastAlertProps = {
  children: string;
};

const meterBars = Array.from({ length: 15 }, (_, index) => index);

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div aria-label={`진행률 ${safeValue}%`} className="vv-progress" role="progressbar">
      <div className="vv-progress-fill" style={{ width: `${safeValue}%` }} />
    </div>
  );
}

export function MicLevelMeter({ level }: MicLevelMeterProps) {
  const activeBars = Math.round((Math.max(0, Math.min(100, level)) / 100) * meterBars.length);

  return (
    <div aria-label={`마이크 레벨 ${level}%`} className="vv-meter">
      {meterBars.map((bar) => (
        <span
          className={`vv-meter-bar ${bar < activeBars ? 'is-active' : ''} ${
            bar > 11 && bar < activeBars ? 'is-hot' : ''
          }`}
          key={bar}
          style={{ height: `${14 + (bar % 5) * 7}px` }}
        />
      ))}
    </div>
  );
}

export function ToastAlert({ children }: ToastAlertProps) {
  return (
    <div className="vv-toast" role="status">
      {children}
    </div>
  );
}

