interface IProgressBarProps {
  progress: number;
}

export function ProgressBar(props: IProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        className="h-3 rounded-xl bg-violet-600 transition-all"
        role="progressbar"
        aria-valuenow={props.progress}
        aria-label="Progresso de hábitos completados nesse dia"
        style={{ width: `${props.progress}%` }}
      ></div>
    </div>
  );
}
