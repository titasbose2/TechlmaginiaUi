import { Blog } from '../../model/blog/blog.model';
import { EMPLOYEES } from '../employee/employee.data';

export const BLOG: Blog[] = [
  {
    key: 'what-is-open-template-hub',
    url: 'what-is-open-template-hub.md',
    date: '21 Oct 2021',
    title: 'What is Techlmaginia Softwares?',
    excerpt: 'We, as Techlmaginia Softwares contributors, keep developing new functionalities and capabilities every week. You can create your microservices or create your mobile and web applications which are integrated with those microservices, that means you can create your own business ground up through Techlmaginia Softwares extremely fast..',
    author: EMPLOYEES[ 1 ],
    tag: 'tech',
  }
];
