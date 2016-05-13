/**
 * Created by daniel on 5/8/16.
 */
import React from 'react';
import Category from './Category';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let bug01 = require('../images/icons/bug-01.png');
    let bug02 = require('../images/icons/bug-02.png');
    let bug03 = require('../images/icons/bug-03.png');
    let bug04 = require('../images/icons/bug-04.png');
    let bug05 = require('../images/icons/bug-05.png');
    let bug06 = require('../images/icons/bug-06.png');
    let bug07 = require('../images/icons/bug-07.png');
    let bug08 = require('../images/icons/bug-08.png');
    let bug09 = require('../images/icons/bug-09.png');

    return (
      <div id="categories" name="categories" className="vertical layout">
        <div name="categories-panel" className="categories-panel flex auto">
          <div name="category-list" className="category-list content wide tile-cascade fade" data-selected="0">
            <Category name="yourself" title="Yourself" theme="yellow-theme" icon={bug03} link="/practice/yourself" />
            <Category name="family" title="Family" theme="green-theme" icon={bug02} link="/practice/family" />
            <Category name="where" title="Where?" theme="leaderboard" icon={bug01} link="/practice/where" />
            <Category name="how-often" title="How often?" theme="blue-theme" icon={bug04} link="/practice/how-often" />
            <Category name="house" title="House" theme="red-theme" icon={bug05} link="/practice/house" />
            <Category name="numbers" title="Numbers" theme="green-theme" icon={bug06} link="/practice/numbers" />
            <Category name="adjectives" title="Adjectives" theme="purple-theme" icon={bug07} link="/practice/adjectives" />
            <Category name="with-whom" title="With whom?" theme="blue-theme" icon={bug08} link="/practice/with-whom" />
            <Category name="shortcuts" title="Shortcuts" icon={bug09} link="/practice/shortcuts" />
            <Category name="greetings" title="Greetings" theme="purple-theme" icon={bug03} link="/practice/greetings" />
            <Category name="building-blocs" title="Building blocs" theme="profile" icon={bug07} link="/practice/building-blocks" />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
