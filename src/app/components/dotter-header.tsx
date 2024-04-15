export default function DottedHeader({ title }: { title: string }) {
    return (
        <div className='flex items-center gap-2 text-medium font-semibold dark:text-night-50'>
            <span className="flex h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span className='max-w-sm'>{title}</span>
        </div>
    )
}