import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';
import NextLink from 'next/link';

type Props = {
  pagePath: {
    path: string,
    name: string,
  }[],
};
export default function Breadcrumbs({ pagePath }: Props): ReactElement {
  return (
    <Breadcrumb
      fontSize='13px'
      border='1px solid #3e3e3e'
      borderRadius='4px'
      bg='#303030'
      spacing='8px'
      separator={<ChevronRightIcon color='gray.300' />}
    >
      {pagePath.map(({path, name}) => {
        return (
          <BreadcrumbItem key={path}>
            <NextLink href={path} passHref><BreadcrumbLink>{name}</BreadcrumbLink></NextLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
