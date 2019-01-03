import path from 'path'

const root = path.resolve(__dirname, '../../')
const paths = {
    dist: path.resolve(root, './dist'),
    src: path.resolve(root, './src'),
    server: path.resolve(root, './server'),
    root: root
}

export default paths