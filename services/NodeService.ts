export default class NodeService {
<<<<<<< HEAD
  getTreeTableNodes() {
    return fetch('/data/treetablenodes.json').then(res => res.json()).then(d => d.root);
  }

  getTreeNodes() {
    return fetch('/data/treenodes.json').then(res => res.json()).then(d => d.root);
=======
  getTreeTableNodes () {
    return fetch('/data/treetablenodes.json').then(res => res.json()).then(d => d.root)
  }

  getTreeNodes () {
    return fetch('/data/treenodes.json').then(res => res.json()).then(d => d.root)
>>>>>>> 2d5dea2 (Initial commit)
  }
}
