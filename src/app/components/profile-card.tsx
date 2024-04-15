import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { source } from '../source';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProfileCard() {

    return (
        <Card>
            <CardHeader>
                <CardTitle>{source.name}</CardTitle>
                <CardDescription>{source.title}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-1'>
                    <div>
                        <div className="mt-2 inline-flex flex-wrap gap-1">

                            {
                                source.links.map(link =>
                                    <a key={link.name} href={link.url} target='_blank' className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-100 px-2 py-1.5 text-xs font-medium text-gray-400 dark:border-night-700 dark:text-night-400 dark:hover:border-primary-500 dark:hover:bg-primary-500/20 dark:hover:text-primary-500">
                                        <span>{link.name}</span>
                                        <FontAwesomeIcon icon={['fab', link.icon]} className="mr-2 h-4 w-4" />
                                    </a>
                                )
                            }
                        </div>
                    </div>
                    <div className='mt-4'>
                        <Button className='bg-sky-500 w-full'>
                            <span>Download CV</span>
                            <FontAwesomeIcon icon={'download'} className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}