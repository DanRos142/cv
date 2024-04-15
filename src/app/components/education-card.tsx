import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Education, source } from '../source';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DottedHeader from "./dotter-header";

export default function EducationCard() {
    return (
        <Card>
            <CardHeader>
                <DottedHeader title='Education' />
            </CardHeader>
            <CardContent>
                {source.education.map(entry => <EducationEntry key={entry.title} education={entry} />)}
            </CardContent>
        </Card>
    );
}

function EducationEntry({ education }: { education: Education }) {
    return (
        <div className="mb-5 flex items-start rounded-lg p-4 border-solid border-2 border-slate-100">
            <img
                src="https://media.licdn.com/dms/image/C4E0BAQGEIj904zPPnA/company-logo_100_100/0/1630629534417/kharkiv_national_university_of_radioelectronics_logo?e=2147483647&v=beta&t=c5T70H69E35e5otGDdYwWjdEK69ABOluxiPTncxqlm4"
                alt="Avatar"
                className="h-14 w-14 shrink-0 rounded-xl border-2 border-gray-50 shadow-sm dark:border-night-700" />
            <div className="ml-3 w-full space-y-5">
                <div className="items-start justify-between sm:flex">
                    <div className="mb-1 space-y-1.5">
                        <div className="font-medium dark:text-night-50">{education.title}</div>
                        <div className="flex space-x-5">
                            <div className="flex items-start gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                                <span className="max-w-sm">{education.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className="items-start space-y-2">
                        <div className="flex gap-1 text-sm font-medium text-gray-400 dark:text-night-400">
                            <FontAwesomeIcon icon={"calendar-days"} className="h-4 w-4 shrink-0" />
                            <span>{education.start} – {education.end}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}