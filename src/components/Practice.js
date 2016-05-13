/**
 * Created by daniel on 5/11/16.
 */
import React from 'react';

class Practice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let prefix = 'http://guibueno.github.io/';
    var { practiceId } = this.props.params;

    switch(practiceId) {
      case 'adjectives':
          practiceId = prefix + 'adjectives.html';
          break;
      case 'building-blocks':
        practiceId = prefix + 'building-blocks.html';
        break;
      case 'family':
        practiceId = prefix + 'exercises/family.html';
        break;
      case 'greetings':
        practiceId = prefix + 'exercises/greetings.html';
        break;
      case 'house':
        practiceId = prefix + 'exercises/house.html';
        break;
      case 'how-often':
        practiceId = prefix + 'exercises/how-often.html';
        break;
      case 'numbers':
        practiceId = prefix + 'exercises/numbers.html';
        break;
      case 'structure':
        practiceId = prefix + 'exercises/structure.html';
        break;
      case 'shortcuts':
        practiceId = prefix + 'exercises/shortcuts.html';
        break;
      case 'suffixes':
        practiceId = prefix + 'exercises/suffixes.html';
        break;
      case 'where':
        practiceId = prefix + 'exercises/where.html';
        break;
      case 'with-whom':
        practiceId = prefix + 'exercises/whith-whom.html';
        break;
      case 'yourself':
        practiceId = prefix + 'exercises/yourself.html';
        break;
      default:
        practiceId = prefix;
    }

    return (
      <div id="practice" className="vertical layout">
        <div name="practice-panel" className="practice-panel flex auto">
          <div name="practice-list" className="practice-list wide fade">
            <iframe class="iframe" src={practiceId} width="100%" height="99%" title="Practice"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Practice;

