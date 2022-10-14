// Deobfuscated by Greenlio#4514
var f = document.createElement('iframe')
f.style.display = 'none'
document.body.appendChild(f)
window.prompt = f.contentWindow.prompt
var t = Object.values(document.querySelector('#app > div > div'))[1]
    .children[1]['_owner'].stateNode,
  amt = parseInt(prompt('How much blooks do you want to add?'))
amt &&
  ((t.picking = false),
  (t.state.canGather = true),
  t.setState({ numBlooks: amt + t.state.numBlooks }),
  t.props.firebase.setVal({
    id: t.props.client.hostId,
    path: 'a/'.concat(t.props.client.name, '/bs'),
    val: amt,
  }),
  t.setState(
    {
      prize: 'gather',
      numBlooks: t.state.numBlooks,
      fadeOut: true,
    },
    function () {
      t.nextTimeout = setTimeout(function () {
        t.randomQ()
      }, 450)
    }
  ))
