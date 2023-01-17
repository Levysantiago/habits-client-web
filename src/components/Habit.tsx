interface HabitsProps {
  completed: number;
}

export function Habit(props: HabitsProps) {
  return <div>{props.completed}</div>;
}
