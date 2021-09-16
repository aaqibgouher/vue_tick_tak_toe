<template>
  <div>
    <!-- start div -->
    <b-container v-if="start_div">
      <b-row>
        <b-col class="first_class" cols="12" sm="12" md="6" lg="6" xl="6" offset-sm="3">
          <b-card
            title="TICK TAK TOE"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-2"
          >
            <b-card-text>
                <b-list-group-item>BY AAQIB GOUHER</b-list-group-item>
            </b-card-text>

            <b-button @click="start_to_game_rules()" variant="outline-info" size="lg">START</b-button>            
          </b-card>
          
        </b-col>
        
      </b-row>
    </b-container>
    <!-- game rules-->
    <b-container v-if="game_rules_div">
      <b-row>
        <b-col class="second_class" cols="12" sm="12" md="6" lg="6" xl="6" offset-sm="3">
          <b-card
            title="Game Rules"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-2"
          >
            <b-card-text>
                <b-list-group-item variant="light">1. The game is played on a grid that's 3 squares by 3 squares.</b-list-group-item>
                <b-list-group-item variant="light">2. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</b-list-group-item>
                <b-list-group-item variant="light">3. When all 9 squares are full, the game is over.</b-list-group-item>
            </b-card-text>

            <b-button @click="game_rules_to_choose_icon()" variant="outline-info" size="md">NEXT</b-button>
          </b-card>
          
        </b-col>
      </b-row>
    </b-container>
    <!-- choose player icon -->
    <b-container v-if="choose_icon_div">
      <b-row>
        <b-col class="third_class" cols="12" sm="12" md="6" lg="6" xl="6" offset-sm="3">
          <b-card
            title="Choose Icon"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 30rem;"
            class="mb-2"
          >
            <b-card-text>
                <b-row>
                    <b-col>
                        <b-form-group label="PLAYER A" v-slot="{ ariaDescribedby }">
                            <b-form-radio @change="select_icon_auto(selected_icon_a)" v-model="selected_icon_a" :aria-describedby="ariaDescribedby" name="some-radios" value="X"> X</b-form-radio>
                            <b-form-radio @change="select_icon_auto(selected_icon_a)" v-model="selected_icon_a" :aria-describedby="ariaDescribedby" name="some-radios" value="0"> 0</b-form-radio>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-card-text>
                            <h6>PLAYER B</h6>
                        </b-card-text>
                        <p>{{ selected_icon_b ? selected_icon_b : 'not selected' }}</p>
                    </b-col>
                </b-row>
            </b-card-text>

            <b-button v-bind:disabled="choose_icon_div_ready_btn" @click="start_game()" variant="outline-info" size="lg">READY</b-button>
          </b-card>
          
        </b-col>
      </b-row>
    </b-container>
    <!-- tick tak toe div -->
    <b-container v-if="tick_tak_toe_div">
      <h2 class="mt-5 font_style">{{ this.result.winner_name+" "+this.result.message }}</h2>
      <h2 v-if="this.count % 2 != 0 && this.count <= 9 && !this.result.winner_name" class="mt-5 font_style">{{ this.selected_icon_obj[0].name+" turn" }}</h2>
      <h2 v-if="this.count % 2 == 0 && this.count <= 9 && !this.result.winner_name" class="mt-5 font_style">{{ this.selected_icon_obj[1].name+" turn" }}</h2>
      <b-row>
        <b-col class="fourth_class" cols="12" sm="12" md="6" lg="6" xl="6" offset-sm="3">
            <b-col>
                <b-button value="1" id="btn_1" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
                <b-button value="2" id="btn_2" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
                <b-button value="3" id="btn_3" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
            </b-col>
            <b-col >
                <b-button value="4" id="btn_4" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
                <b-button value="5" id="btn_5" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
                <b-button value="6" id="btn_6" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
            </b-col>
            <b-col>
                <b-button value="7" id="btn_7" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
                <b-button value="8" id="btn_8" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
                <b-button value="9" id="btn_9" @click="tick_tak_toe_start(+($event.target.value))" class="btn_manage" variant="outline-info" size="lg"></b-button>
            </b-col>
            <b-button @click="reset()" v-if="this.result.winner_name" class='mt-5' variant="outline-danger" size="lg">RESET</b-button>
        </b-col>
      </b-row>
    </b-container>
    <!-- winner -->
  </div>
</template>

<script>
export default {
  name: "TikTakToe",

  data() {
    return {
      start_div: true,
      game_rules_div: false,
      choose_icon_div: false,
      tick_tak_toe_div: false,
      choose_icon_div_ready_btn : true,
      selected_icon_obj : [
          {
              name : "player_A",
              icon : "",
              color : "",
              player_str : ""
          },
          {
              name : "player_B",
              icon : "",
              color : "",
              player_str : ""
          }
      ],
      selected_icon_a : "",
      selected_icon_b : "",
      count : 1,
      winner_array : ["123", "456", "789", "147", "258", "369", "159", "357"],
      result : {
        winner_name : "",
        message : ""
      }

    };
  },

  methods: {
    hide_start_div() {
      this.start_div = false;
    },

    show_game_rules() {
      this.game_rules_div = true;
    },

    hide_game_rules() {
      this.game_rules_div = false;
    },

    show_choose_icon_div() {
      this.choose_icon_div = true;
    },

    hide_choose_icon_div() {
      this.choose_icon_div = false;
    },

    show_tick_tak_toe_div() {
      this.tick_tak_toe_div = true;
    },

    start_to_game_rules() {
      this.hide_start_div();
      this.show_game_rules();
    },

    game_rules_to_choose_icon() {
      this.hide_game_rules();
      this.show_choose_icon_div();
    },

    hide_tick_tak_toe_div(){
      this.tick_tak_toe_div = false;
    },

    select_icon_auto(icon){
        if(icon == 'X'){
            this.selected_icon_b = '0';
            this.selected_icon_obj[0].icon = this.selected_icon_a;
            this.selected_icon_obj[0].color = "grey";
            this.selected_icon_obj[1].icon = this.selected_icon_b;
            this.selected_icon_obj[1].color = "red";
            this.choose_icon_div_ready_btn = false;

        }else{
            this.selected_icon_b = 'X';
            this.selected_icon_obj[0].icon = this.selected_icon_a;
            this.selected_icon_obj[0].color = "red";
            this.selected_icon_obj[1].icon = this.selected_icon_b;
            this.selected_icon_obj[1].color = "grey";
            this.choose_icon_div_ready_btn = false;
        }
    },

    start_game() {
      this.hide_choose_icon_div();
      this.show_tick_tak_toe_div();
    },

    get_id(value){
      return "btn_"+value;
    },

    split_winner_array(winner_element){
      return winner_element.split('');
    },

    compare_player_str_and_split_winner_element(player_arr, winner_split_arr){
      // console.log(player_arr);
      // console.log(winner_split_arr);
      // let filter_player_arr =
      let i;
      let match_count = 0;

      if(player_arr.length >= 3){
        for(i in player_arr){
          if((winner_split_arr.indexOf(player_arr[i])) + 1){
            // console.log(winner_split_arr.indexOf(player_arr[i]));
            match_count ++;
          }
        }
      }

      // console.log(match_count);
      // console.log("-----");
      return match_count;
    },

    disable_all_btn(){
      let count;
      let id;
      let btn_element;

      for(count=1;count<=9;count++){
        id = this.get_id(count);
        btn_element = document.getElementById(id);
        btn_element.setAttribute("disabled", false);
      }
      // let count = 1;
      // let id = this.get_id(count);
      // let btn_element = document.getElementById(id);
      // console.log(btn_element);
    },

    find_winner(){
      if(this.count % 2 != 0){
        let first_player_arr = (this.selected_icon_obj[0].player_str).split('');
        // console.log(first_player_arr);
        let i;
        let split_winner_element;

        for(i in this.winner_array){
          split_winner_element = this.split_winner_array(this.winner_array[i]);
          let match_count = this.compare_player_str_and_split_winner_element(first_player_arr, split_winner_element);

          if(match_count == 3){
            this.result.winner_name = this.selected_icon_obj[0].name;
            this.result.message = "Won";
            this.disable_all_btn();
          }
        }

        if(this.count == 9){
          this.result.winner_name = "Match";
          this.result.message = "Draw";
        }

      }else{
        let second_player_arr = (this.selected_icon_obj[1].player_str).split('');
        // console.log(second_player_arr);
        let i;
        let split_winner_element;

        for(i in this.winner_array){
          split_winner_element = this.split_winner_array(this.winner_array[i]);
          let match_count = this.compare_player_str_and_split_winner_element(second_player_arr, split_winner_element);

          if(match_count == 3){
            this.result.winner_name = this.selected_icon_obj[1].name;
            this.result.message = "Won";
            this.disable_all_btn();
          }
        }
      }
    },

    tick_tak_toe_start(value){
        // change value, insert desired icon, color, disable
        let id = this.get_id(value);

        if(this.count % 2 != 0){
          
          this.selected_icon_obj[0].player_str += value;
          // console.log(this.selected_icon_obj[0].player_str);
          let html = document.getElementById(id);
          html.innerHTML = "<h2 style='color: "+this.selected_icon_obj[0].color+"'>"+this.selected_icon_obj[0].icon+"</h2>";
          html.setAttribute("disabled", false);

          this.find_winner();
          
          this.count++;
        }else{
          
          this.selected_icon_obj[1].player_str += value;
          // console.log(this.selected_icon_obj[1].player_str);
          let html = document.getElementById(id);
          html.innerHTML = "<h2 style='color: "+this.selected_icon_obj[1].color+"'>"+this.selected_icon_obj[1].icon+"</h2>"
          html.setAttribute("disabled", false);

          this.find_winner();
          
          this.count++;
        }
    },

    reset(){
      this.selected_icon_a = '';
      this.selected_icon_b = '';
      this.selected_icon_obj[0].icon = '';
      this.selected_icon_obj[0].color = '';
      this.selected_icon_obj[1].icon = '';
      this.selected_icon_obj[1].color = '';
      this.choose_icon_div_ready_btn = true;
      this.result.winner_name = '';
      this.result.message = '';
      this.count = 1;
      this.selected_icon_obj[0].player_str = '';
      this.selected_icon_obj[1].player_str = '';
      this.show_choose_icon_div();
      this.hide_tick_tak_toe_div();
    }
  }
};
</script>

<style scoped>
.first_class {
  margin-top: 70px;
  font-family: Courier;
  /* width: 50%; */
  /* height: 400px; */
  padding-left: 40px;
}

.second_class {
    margin-top: 10px;
    font-family: Courier;
    /* width: 50%; */
    /* height: 400px; */
    padding-left: 40px;
}

.third_class {
    margin-top: 50px;
    font-family: Courier;
    /* width: 50%; */
    /* height: 400px; */
    padding-left: 40px;
}

.fourth_class {
    margin-top: 100px;
    font-family: Courier;
    /* width: 50%; */
    /* height: 400px; */
}

.btn_manage {
    font-family: Courier;
    width: 100px;
    height: 100px;
}

.font_style {
  font-family: Courier;
}
</style>