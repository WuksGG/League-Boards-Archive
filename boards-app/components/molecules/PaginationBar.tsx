import {
  IconButton,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import type { ReactElement } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';


type PageButtonProps = {
  value: number,
  currentPage: number,
  pathName: string,
};
function PageButton({value, currentPage, pathName}: PageButtonProps): ReactElement {
  return (
    <NextLink
      href={{
        pathname: pathName,
        query: { page: value },
      }}
      passHref
    >
      <Button
        fontWeight='500'
        fontSize='13px'
        isActive={value === currentPage}
      >{value}</Button>
    </NextLink>
  );
}

type PaginationBarProps = {
  page: number,
  total: number,
  pathName: string,
};
function PaginationBar({ page, total, pathName }: PaginationBarProps): ReactElement {
  const totalPages = Math.ceil(total / 20);
  return (
    <Flex
      gap='12px'
      justify='flex-end'
      mt='10px'
      sx={{
        '& button': {
          cursor: 'pointer',
          border: '1px solid #4e4e4e',
          color: '#fff',
          borderRadius: '1px',
        },
      }}
    >
      <Flex gap='4px'>
        <NextLink
          href={{
            pathname: pathName,
            query: {
              page: page - 1,
            },
          }}
          passHref
        >
          <IconButton
            aria-label='Previous page'
            icon={<ChevronLeftIcon />}
            isDisabled={page === 1}
          />
        </NextLink>
      </Flex>
      <Flex
        gap='5px'
      >
        <PageButton value={1} currentPage={page} pathName={pathName} />
        {page > 5 && totalPages > 10 && <Text p='0px 10px'>&hellip;</Text>}
        <PageButton value={2} currentPage={page} pathName={pathName} />
        <PageButton value={3} currentPage={page} pathName={pathName} />
        <PageButton value={4} currentPage={page} pathName={pathName} />
        {(page < totalPages - 3) && <Text p='0px 10px'>&hellip;</Text>}
        <PageButton value={totalPages} currentPage={page} pathName={pathName} />
      </Flex>
      <Flex gap='4px'>
        <NextLink
          href={{
            pathname: pathName,
            query: {
              page: page + 1,
            },
          }}
          passHref
        >
          <IconButton
            aria-label='Next page'
            icon={<ChevronRightIcon />}
            isDisabled={page === totalPages}
          />
        </NextLink>
      </Flex>
    </Flex>
  );
}

export default PaginationBar;
