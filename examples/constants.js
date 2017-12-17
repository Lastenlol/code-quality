io.read('path/to/some/file.txt');
io.write('path/to/some/file.txt');
// ->
const filePath = 'path/to/some/file.txt';
io.read(filePath);
io.write(filePath);