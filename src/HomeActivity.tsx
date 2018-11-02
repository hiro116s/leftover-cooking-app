import React from 'react';
import { View }  from 'react-native';
import { Recipe } from './components/Recipe';
import IngredientModel from './model/IngredientModel';
import RecipeModel from './model/RecipeModel';
import RecipeStack from './components/RecipeStack';

export default class HomeActivity extends React.Component<{}, {}> {
  recipe1: RecipeModel = new RecipeModel('焼き肉のタレだけ！スキレットでビビンバ風', 'https://img.cpcdn.com/recipes/2494374/280/4d700c6db375f474252a4efb1a9c5e23.jpg?u=2696078&p=1391848993', [ new IngredientModel("ゴボウ", "４００g"), new IngredientModel("ニンジン", "２５０g")]);
  recipe2: RecipeModel = new RecipeModel('山芋無しで♡春キャベツのお好み焼き♡', 'https://img.cpcdn.com/recipes/3742964/280/447c228c95a633c72772d18227026a9e.jpg?u=10049643&p=1457769601',  [ new IngredientModel("キャベツ", "約７００㌘"), new IngredientModel("豚", "６〜７枚"), new IngredientModel("モヤシ", "１袋(２００㌘)"), new IngredientModel("卵", "６〜７個"), new IngredientModel("小麦粉", "１５０㌘"), new IngredientModel("ベーキングパウダー", "５㌘"), new IngredientModel("牛乳", "２００㏄"), new IngredientModel("カツオ", "小さじ１と１/２"), new IngredientModel("マヨネーズ", "各適量"), new IngredientModel("サラダ油", "適量") ]);

  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Recipe recipe={this.recipe2} />
          <Recipe recipe={this.recipe1} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Recipe recipe={this.recipe1} />
          <Recipe recipe={this.recipe2} />
        </View>
        <View>
          <RecipeStack recipes={[this.recipe1, this.recipe2, this.recipe1, this.recipe2, this.recipe1, this.recipe2]} />
        </View>
      </View>
    );
  }
}
