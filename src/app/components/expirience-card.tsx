import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Expirience, source } from '../source';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DottedHeader from './dotter-header';

export default function ExpirienceCard() {
    return (
        <Card>
            <CardHeader>
                <DottedHeader title='Experience' />
            </CardHeader>
            <CardContent>
                {source.expirience.map(expirience => <ExprienceEntry key={expirience.company} expirience={expirience} />)}
            </CardContent>
        </Card>
    );
}


function ExprienceEntry({ expirience }: { expirience: Expirience }) {
    return (
        <div className="mb-5 flex items-start rounded-lg p-4 border-solid border-2 border-slate-100">
            <img
                src={expirience.logoUrl}
                alt="Avatar"
                className="h-14 w-14 shrink-0 rounded-xl border-2 border-white shadow-sm dark:border-night-700" />
            <div className="ml-3 w-full space-y-5">
                <div className="justify-between sm:flex">
                    <div className="space-y-2">
                        <div className="font-medium dark:text-night-50">{expirience.company}</div>
                        <div className="sm:flex sm:space-x-5">
                            <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                                <FontAwesomeIcon icon={'briefcase'} className="h-4 w-4 shrink-0" />
                                <span>{expirience.title}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                                <FontAwesomeIcon icon={'map-location'} className="h-4 w-4 shrink-0" />
                                <span>{expirience.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-between space-y-1 sm:block sm:text-right">
                        <div
                            className="order-last inline-flex items-center rounded-lg bg-primary-500/20 px-2 py-1 text-xs font-medium text-primary-500">
                            {expirience.workType}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                            <FontAwesomeIcon icon={'calendar-days'} className="h-4 w-4 shrink-0" />
                            <span>{expirience.start} - {expirience.end}</span>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-night-300">{expirience.description}</p>
                <ul className="list-disc marker:text-sky-500">
                    {
                        expirience.keyPoints.map(point => <li key={point} className="text-sm text-gray-600 dark:text-night-300">{point}</li>)
                    }
                </ul>
                <div className="-m-2 flex flex-wrap">
                    {
                        expirience.technologies.map(s =>
                            <Badge key={s} className="badge m-1 cursor-pointer bg-gray-100 text-gray-400">
                                {s}
                            </Badge>)
                    }
                </div>
            </div>
        </div>
    );
}