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


type PageButtonProps = {
  value: number,
  currentPage: number,
  onClick: (page: number) => void,
};
function PageButton({value, currentPage, onClick}: PageButtonProps) {
  const buttonClickHandler = (): void => {
    onClick(value);
  };
  return (
    <Button
      fontWeight='500'
      fontSize='13px'
      isActive={value === currentPage}
      onClick={buttonClickHandler}
    >{value}</Button>
  );
}

type PaginationBarProps = {
  page: number,
  total: number,
  onClick: (page: number) => void,
};
function PaginationBar({ page, total, onClick }: PaginationBarProps): ReactElement {
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
        <IconButton
          aria-label='Previous page'
          icon={<ChevronLeftIcon />}
          isDisabled={page === 1}
        />
      </Flex>
      <Flex
        gap='5px'
      >
        <PageButton value={1} currentPage={page} onClick={onClick} />
        {page > 5 && totalPages > 10 && <Text p='0px 10px'>&hellip;</Text>}
        <PageButton value={2} currentPage={page} isActive onClick={onClick} />
        <PageButton value={3} currentPage={page} onClick={onClick} />
        <PageButton value={4} currentPage={page} onClick={onClick} />
        {(page < totalPages - 3) && <Text p='0px 10px'>&hellip;</Text>}
        <PageButton value={totalPages} currentPage={page} onClick={onClick} />
      </Flex>
      <Flex gap='4px'>
        <IconButton
          aria-label='Next page'
          icon={<ChevronRightIcon />}
        />
      </Flex>
    </Flex>
  );
}

export default PaginationBar;
