import * as proto from 'protobufjs';
import text from '../__fixtures__/proto';

it('works', () => {
  const result = proto.parse(text);
  console.log(JSON.stringify(result, null, 2));
});
