import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import cotw from '../enums/enums.jsx';
import Attribute from './components/attributes.jsx';
import GameDifficulty from './components/gameDifficulty.jsx';
import Gender from './components/gender.jsx';

var CharCreation = React.createClass({
  mixins: [LinkedStateMixin],
  contextTypes: {
    store: React.PropTypes.object
  },
  getInitialState() {
    console.dir(this.context.store.getState());
    return {
      name: "Testing",
      difficulty: cotw.DifficultyLevel.Easy,
      attributes: {
        Available: {value: 100, name: 'Available'},
        Strength: {value: 50, name: 'Strength'},
        Intelligence: {value: 50, name: 'Intelligence'},
        Constitution: {value: 50, name: 'Constitution'},
        Dexterity: {value: 50, name: 'Dexterity'}
      }
    }
  },
  setDifficulty(level) {
    this.setState({difficulty: level});
  },
  setAttributes(attributes) {
    this.setState({attributes: attributes});
  },
  setGender(gender) {
    this.setState({gender:gender});
    console.debug('Calling set gender');
  },
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="ui one column">
          <div className="ui stacked vertical segment">
            <div className="ui vertical segment">
              <div className="ui labeled fluid input">
                <div className="ui label">Character Name:</div>
                <input type="text" name="name" placeholder="What word did your mother utter as you came kicking and screaming into this world?" valueLink={this.linkState('name')}/>
              </div>
            </div>
            <Attribute name="strength" onSetAttribute={this.setAttributes} descriptions={cotw.AttributeDescriptions.Strength} />
            {
              //Attributes onSetAttributes={this.setAttributes} defaultAttributes={this.state.attributes}
            }
            <div className="ui vertical segments">
              <div className="ui vertical segment">Character Gender</div>
              <div className="ui vertical segment">
                <Gender gender="male" setGender={this.setGender}/>
              </div>
            </div>
            <GameDifficulty onSetDifficulty={this.setDifficulty} defaultDifficulty={this.state.difficulty} />
            <div className="ui button primary">Ok</div>
            <div className="ui button">Cancel</div>
            <div className="ui button">View Icon</div>
            <div className="ui button">Help</div>
          </div>
          <pre>{JSON.stringify(this.state)}</pre>
        </div>
      </div>
    )
  }
});

export default CharCreation