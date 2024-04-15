import { source } from '../source';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import DottedHeader from './dotter-header';

export default function AboutCard() {
    return (
        <Card>
            <CardHeader>
                <DottedHeader title='About me' />
            </CardHeader>
            <CardContent>
                <p className="mb-5 text-sm text-gray-600 dark:text-night-200">
                    {source.about}
                </p>
            </CardContent>
        </Card>
    )
}