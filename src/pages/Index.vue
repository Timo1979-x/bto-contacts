<template>
  <!-- <q-page class="flex"> -->
  <div class="q-pa-md q-gutter-sm">
    <q-input
      ref="filter"
      filled
      v-model.trim="filter"
      label="Поиск"
      dense
      autofocus
      @input="filterChanged"
    >
      <template v-slot:append>
        <q-icon
          v-if="filter !== ''"
          name="clear"
          class="cursor-pointer"
          @click="resetFilter"
        />
      </template>
    </q-input>
    <q-tree
      :nodes="rootNodes"
      no-connectors
      node-key="k"
      label-key="n"
      children-key="c"
      :expanded.sync="expanded"
    >
      <template v-slot:default-header="prop">
        <div class="row items-center">
          <q-icon :name="prop.node.i" />
          <div class="text-weight-bold text-primary">
            &nbsp;&nbsp;{{ prop.node.n }} &nbsp;&nbsp;<q-icon
              name="info" title="Подробнее" style="cursor: pointer;"
              @click.stop="showDetails(prop.node)"
            />
            <span v-if="prop.node.mt"
              ><a :href="'mailto:' + prop.node.mt" @click.stop="clickLink"
                ><q-icon name="email" />{{ prop.node.e[0].e }}</a
              ></span
            >
            <span v-if="prop.node.gmt" title="Написать всем"
              >&nbsp;&nbsp;<a
                :href="'mailto:' + prop.node.gmt"
                @click.stop="clickLink"
                ><q-icon name="email" style="color: green;"/></a
            ></span>
            <span v-if="prop.node.pt"
              >&nbsp;&nbsp;<a
                :href="'tel:' + prop.node.pt"
                @click.stop="clickLink"
                ><q-icon name="phone" />{{ prop.node.pt }}</a
              ></span
            >
          </div>
        </div>
      </template>
    </q-tree>

    <q-dialog v-model="detailsVisible">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">{{ details.n }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list dense separator>
            <q-item v-for="e in details.e" :key="e.e">
              <q-item-section>
                <q-item-label
                  ><q-btn dense @click="clip(e.e)" title="Скопировать в буфер"
                    ><q-icon name="content_copy"/></q-btn
                  >&nbsp;<q-btn dense><a :href="'mailto:' + e.e" title="Написать письмо"
                    ><q-icon name="email" /> {{ e.e }}</a
                  ></q-btn></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list dense separator>
            <q-item v-for="ph in details.ph" :key="ph.p">
              <q-item-section>
                <q-item-label
                  ><q-btn dense @click="clip(ph.p)" title="Скопировать в буфер"
                    ><q-icon name="content_copy"/></q-btn
                  >&nbsp;
                  <q-btn dense title="Позвонить"
                    ><a :href="'tel:' + ph.p"
                      ><q-icon name="phone" /> {{ ph.p }}</a
                    >
                  </q-btn>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <!-- </q-page> -->
</template>

<script>
import { contactsRaw } from "../lib/data";
import { convertContactsIntoTree } from "../lib/funcs";
import { copyToClipboard } from "quasar";
// import _cloneDeep from 'lodash/cloneDeep';
export default {
  name: "PageIndex",
  data() {
    return {
      defaultRootNodes: convertContactsIntoTree(contactsRaw),
      rootNodes: [],
      filter: "",
      expanded: [],
      detailsVisible: false,
      details: {}
    };
  },
  // computed: {
  // rootNodes() {
  //   return this.filter
  //     ? this.filterRecursive(this.defaultRootNodes)
  //     : this.defaultRootNodes;
  // }
  // },
  methods: {
    clip(text) {
      copyToClipboard(text)
        .then(() => {
          this.$q.notify({
            message: "Скопировано в буфер обмена",
            color: "purple"
          });
        })
        .catch(() => {
          this.$q.notify({
            message: "Не удалось скопировать в буфер",
            color: "red"
          });
        });
    },
    showDetails(x) {
      this.details = x;
      this.detailsVisible = true;
    },
    clickLink(x) {
      console.log(x.target.href);
      window.location = x.target.href;
    },
    resetFilter() {
      this.filter = "";
      this.$refs.filter.focus();
      this.filterChanged();
    },
    filterChanged() {
      this.expanded = [];
      if (this.filter.length > 1) {
        this.rootNodes = this.filterRecursive(this.defaultRootNodes);
      } else {
        this.rootNodes = this.defaultRootNodes;
      }
      this.expanded = this.calcExpanded();
    },
    filterRecursive(list) {
      let result = [];
      let filter = this.filter.trim().toLowerCase();
      for (let item of list) {
        if (item.t.includes(filter)) {
          result.push(item);
        } else {
          if (item.c) {
            let c = this.filterRecursive(item.c);
            if (c.length) {
              result.push({ ...item, c: c });
            }
          }
        }
      }
      return result;
    },
    defaultExpanded() {
      let exp = [];
      for (let item of this.rootNodes) {
        exp.push(item.k);
        // if(item.c) {
        //   for(let child of item.c) {
        //     exp.push(child.k)
        //   }
        // }
      }
      return exp;
    },
    calcExpanded() {
      let exp = [];
      let expRecursive = function(node) {
        if (node.c && node.c.length <= 3) {
          exp.push(node.k);
          for (let child of node.c) {
            expRecursive(child);
          }
        }
      };
      for (let node of this.rootNodes) {
        expRecursive(node);
      }
      return exp;
    }
    // calcExpandedRecursive(rootItem) {
    //   if (rootItem.c && rootItem.c.length < 3) {
    //     thos.expanded.push();
    //   }
    // }
  },
  mounted() {
    this.rootNodes = this.defaultRootNodes;
    this.expanded = this.defaultExpanded();
  }
};
</script>
