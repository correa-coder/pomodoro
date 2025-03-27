import * as Switch from '@radix-ui/react-switch';

interface SwitchProps {
    label: string;
    checked: boolean;
    onCheckedChange: any;
}

export default function SwitchPrimary({
    label,
    checked,
    onCheckedChange,
}: SwitchProps) {
    const id = `${label}-${Math.random() * 100}`;

    return (
        <form
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8,
            }}
        >
            <Switch.Root
                className="switch-root"
                id={id}
                checked={checked}
                onCheckedChange={onCheckedChange}
            >
                <Switch.Thumb className="switch-thumb" />
            </Switch.Root>
            <label className="switch-label" htmlFor={id}>
                {label}
            </label>
        </form>
    );
}
