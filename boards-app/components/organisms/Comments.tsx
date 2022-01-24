import {
  Flex,
  VStack,
} from '@chakra-ui/react';
import { marked } from 'marked';
import Comment from '../organisms/Comment';

export default function Comments({ comments }) {
  console.log(comments);
  // const markdown = marked.parse(discussion.content.body);
  return (
    <VStack>
      {comments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment}/>
        );
      })}
    </VStack>
  );
}