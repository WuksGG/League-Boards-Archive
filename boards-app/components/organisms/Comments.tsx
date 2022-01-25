import {
  VStack,
} from '@chakra-ui/react';
import Comment from '../organisms/Comment';
import type { Comments as CommentsType } from '../../types/app';
import type { ReactElement } from 'react';

type CommentsProps = {
  comments: CommentsType,
};

export default function Comments({ comments }: CommentsProps): ReactElement {
  return (
    <VStack w='100%'>
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment}/>
        );
      })}
    </VStack>
  );
}
