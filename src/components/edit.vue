<template>



            <v-form v-model="valid" ref="form" lazy-validation>
              <v-card>
            <v-layout row wrap>
              <v-flex xs10>
          <v-card-text>
                    <h1>เลือกชื่อเพื่อแก้ไข</h1>
                    <v-select
                      v-bind:items="allname"
                      v-model="e1"
                      label="Select"
                      single-line
                      bottom
                    ></v-select>
          </v-card-text>

                </v-flex>
                <v-flex xs2>

            <v-card-text >
            </br></br>
              <v-btn
                   @click="submit"

                 >
                   submit
                 </v-btn>
            </v-card-text>

                  </v-flex>
                </v-layout>
                    </v-card>

                    <v-layout row wrap>
                    <v-flex xs6>

                    <v-card-text class="px-0">
                    <img :src="datas.picture.image" alt="old img" width="200" height="200">

                    </v-card-text>

                    </v-flex>
                    <v-flex xs6>
                    <v-card-text class="px-0">
                     <img :src="datas.picture.card" alt="old card" width="400" height="200">
                    </v-card-text>
                    </v-flex>
                    </v-layout>


            <v-layout row wrap>
            <v-flex xs6>
            <v-card-text>
            <div>
               <picture-input
                 ref="pictureInput2"
                 @change="onChange('pic')"
                 width="200"
                 height="200"
                 margin="16"
                 accept="image/jpeg,image/png"
                 size="10"
                 buttonClass="btn"
                 :removable="true"
                 :zIndex="-1"
                 :customStrings="{
                   upload: '<h1>Bummer!</h1>',
                   drag: 'คลิกเพื่อใส่รูปภาพใหม่'
                 }">
               </picture-input>
            </div>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            label="วันที่ ที่ถ่ายภาพ"
            prepend-icon="event"
            v-model="datas.picture.date"
            readonly
            ></v-text-field>
            <v-date-picker v-model="datas.picture.date" scrollable actions locale="th">
            <template slot-scope="{ save, cancel }">
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
               <v-btn flat color="primary" @click="save">OK</v-btn>
             </v-card-actions>
            </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            <v-flex xs6>
            <v-card-text>

               <picture-input
               required
                 ref="pictureInput"
                 @change="onChange('card')"
                 width="400"
                 height="200"
                 margin="16"
                 accept="image/jpeg,image/png"
                 size="10"
                 :removable="true"
                 :zIndex="-1"
                 buttonClass="btn"
                 :customStrings="{
                   upload: '<h1>Bummer!</h1>',
                   drag: 'คลิกเพื่อใส่รูปบัตรประชาชนใหม่'
                 }">
               </picture-input>

            </v-card-text>
            </v-flex>
            </v-layout>

                    <v-card>
                      <v-card-title primary-title>
                    <h1 class="headline">ประวัติ</h1>
                  </v-card-title>
                      <v-layout row wrap>
                 <v-flex xs6>
                     <v-card-text>
                       <v-text-field
                         label="ชื่อ"
                         v-model="datas.information.name"
                         value="allinfo.information.name"
                         :rules="[
                         (v) => !!v || 'required',
                         (v) => v && v.length <= 15 || 'Name must be less than 15 characters'
                         ]"
                         :counter="15"
                         required
                       ></v-text-field>
                     </v-card-text>
                 </v-flex>
                 <v-flex xs6>
                     <v-card-text>
                       <v-text-field
                         label="นามสกุล"
                         v-model="datas.information.lastname"
                         :rules="[
                         (v) => !!v || 'required',
                         (v) => v && v.length <= 15 || 'Name must be less than 15 characters'
                         ]"
                         :counter="15"
                         required
                       ></v-text-field>
                     </v-card-text>
                 </v-flex>
               </v-layout>
               <v-layout row wrap>
                    <v-flex xs6>
                        <v-card-text>
                          <v-text-field
                            label="ชื่อภรรยา"
                            v-model="datas.information.wifename"
                            :rules="[
                            (v) => !!v || 'required',
                            (v) => v && v.length <= 15 || 'Name must be less than 15 characters'
                            ]"
                            :counter="15"
                            required
                          ></v-text-field>
                        </v-card-text>
                    </v-flex>

                    <v-flex xs6>
                        <v-card-text>
                          <v-text-field
                            label="นามสกุลเดิม"
                            v-model="datas.information.wifelastname"
                            :rules="[
                            (v) => !!v || 'required',
                            (v) => v && v.length <= 15 || 'Name must be less than 15 characters'
                            ]"
                            :counter="15"
                            required
                          ></v-text-field>
                        </v-card-text>
                    </v-flex>
                  </v-layout>
            </v-card>
            </br>

            <v-card>
                <v-card-title primary-title>
                <h1 class="headline">บุตร</h1>
              </v-card-title>
                  <v-layout row wrap>
                       <v-flex xs6>
                           <v-card-text >
                             <v-text-field
                               label="1.ชื่อ"
                               v-model="datas.children.child1.name"
                              value="allinfo.information.name"
                             ></v-text-field>
                           </v-card-text>
                       </v-flex>

                       <v-flex xs6>
                           <v-card-text >
                             <v-text-field
                               label="นามสกุล"
                               v-model="datas.children.child1.lastname"

                             ></v-text-field>
                           </v-card-text>
                       </v-flex>
                     </v-layout>

                     <v-layout row wrap>
                          <v-flex xs6>
                              <v-card-text >
                                <v-text-field
                                  label="2.ชื่อ"
                                  v-model="datas.children.child2.name"

                                ></v-text-field>
                              </v-card-text>
                          </v-flex>

                          <v-flex xs6>
                              <v-card-text >
                                <v-text-field
                                  label="นามสกุล"
                                  v-model="datas.children.child2.lastname"

                                ></v-text-field>
                              </v-card-text>
                          </v-flex>

                        </v-layout>
                        <v-layout row wrap>
                             <v-flex xs6>
                                 <v-card-text >
                                   <v-text-field
                                     label="3.ชื่อ"
                                     v-model="datas.children.child3.name"

                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>

                             <v-flex xs6>
                                 <v-card-text >
                                   <v-text-field
                                     label="นามสกุล"
                                     v-model="datas.children.child3.lastname"

                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                           </v-layout>
                         </v-card>
            </br>
                         <v-card>

                            <v-card-title primary-title>
                              <h1 class="headline">ที่อยู่</h1>
                            </v-card-title>
                           <v-layout row wrap>
                      <v-flex xs4>
                          <v-card-text>
                            <v-text-field
                              label="เลขที่"
                              v-model="datas.address.addressnow.housenumber"
                              :rules="[v => !!v || 'required']"
                              required
                            ></v-text-field>
                          </v-card-text>
                      </v-flex>
                      <v-flex xs4>
                          <v-card-text>
                            <v-text-field
                              label="ซอย"
                              v-model="datas.address.addressnow.soi"
                              :rules="[v => !!v || 'required']"
                              required
                            ></v-text-field>
                          </v-card-text>
                      </v-flex>
                      <v-flex xs4>
                          <v-card-text>
                            <v-text-field
                              label="ถนน"
                              v-model="datas.address.addressnow.road"
                              :rules="[v => !!v || 'required']"
                              required
                            ></v-text-field>
                          </v-card-text>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap>
               <v-flex xs4>
                   <v-card-text>
                     <v-text-field
                       label="ตำบล"
                       v-model="datas.address.addressnow.tumbon"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               <v-flex xs4>
                   <v-card-text>
                     <v-text-field
                       label="อำเภอ"
                       v-model="datas.address.addressnow.aumpur"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               <v-flex xs4>
                   <v-card-text>
                     <v-text-field
                       label="จังหวัด"
                       v-model="datas.address.addressnow.province"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
             </v-layout>
             <v-layout row wrap>
            <v-flex xs8>
            <v-card-text>
              <v-text-field
                label="คอนโด / อพาร์ทเม้นท์"
                v-model="datas.address.addressnow.condoname"

              ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs4>
            <v-card-text>
              <v-text-field
                label="รหัสไปรษณีย์"
                v-model="datas.address.addressnow.zipcode"
                :rules="[v => !!v || 'required']"
                required
              ></v-text-field>
            </v-card-text>
            </v-flex>
            </v-layout>

                    <v-card-title primary-title>
                        <h1 class="headline">ภูมิลำเนาเดิม</h1>
                        </v-card-title>
                        <v-layout row wrap>
                      <v-flex xs6>
                          <v-card-text>
                            <v-text-field
                              label="ตำบล"
                              v-model="datas.address.oldaddress.tumbon"
                              :rules="[v => !!v || 'required']"
                              required
                            ></v-text-field>
                          </v-card-text>
                      </v-flex>
                      <v-flex xs6>
                          <v-card-text>
                            <v-text-field
                              label="อำเภอ"
                              v-model="datas.address.oldaddress.aumpur"
                              :rules="[v => !!v || 'required']"
                              required
                            ></v-text-field>
                          </v-card-text>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap>
               <v-flex xs6>
                   <v-card-text>
                     <v-text-field
                       label="จังหวัด"
                       v-model="datas.address.oldaddress.province"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               <v-flex xs6>
                   <v-card-text>
                     <v-text-field
                       label="รหัสไปรษณีย์"
                       v-model="datas.address.oldaddress.zipcode"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
             </v-layout>
             <v-card-title primary-title>
                 <h1 class="headline">สถานที่เกิด</h1>
                 </v-card-title>
                 <v-layout row wrap>
                   <v-flex xs4>
                       <v-card-text>
                         <v-text-field
                           label="เลขที่"
                           v-model="datas.address.bornaddress.housenumber"
                           :rules="[v => !!v || 'required']"
                           required
                         ></v-text-field>
                       </v-card-text>
                   </v-flex>
                   <v-flex xs4>
                       <v-card-text>
                         <v-text-field
                           label="ตำบล"
                           v-model="datas.address.bornaddress.tumbon"
                           :rules="[v => !!v || 'required']"
                           required
                         ></v-text-field>
                       </v-card-text>
                   </v-flex>
                   <v-flex xs4>
                       <v-card-text>
                         <v-text-field
                           label="อำเภอ"
                           v-model="datas.address.bornaddress.aumpur"
                           :rules="[v => !!v || 'required']"
                           required
                         ></v-text-field>
                       </v-card-text>
                   </v-flex>
               <v-flex xs6>
                   <v-card-text>
                     <v-text-field
                       label="จังหวัด"
                       v-model="datas.address.bornaddress.province"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               <v-flex xs6>
                   <v-card-text>
                     <v-text-field
                       label="รหัสไปรษณีย์"
                       v-model="datas.address.bornaddress.zipcode"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
             </v-layout>
                 </v-card>
            </br>
                 <v-card>
                   <v-card-title primary-title>
                 <h1 class="headline">ประวัติ บิดา/มารดา</h1>
               </v-card-title>
                   <v-layout row wrap>
               <v-flex xs6>
                  <v-card-text>
                    <v-text-field
                      label="ชื่อบิดา"
                      v-model="datas.cousin.parents.dadname"
                      :rules="[v => !!v || 'required']"
                      required
                    ></v-text-field>
                  </v-card-text>
               </v-flex>
               <v-flex xs6>
                  <v-card-text>
                    <v-text-field
                      label="นามสกุล"
                      v-model="datas.cousin.parents.dadlastname"
                      :rules="[v => !!v || 'required']"
                      required
                    ></v-text-field>
                  </v-card-text>
               </v-flex>
               </v-layout>
               <v-layout row wrap>
                 <v-flex xs6>
                     <v-card-text>
                       <v-text-field
                         label="ชื่อมารดา"
                         v-model="datas.cousin.parents.momname"
                         :rules="[v => !!v || 'required']"
                         required
                       ></v-text-field>
                     </v-card-text>
                 </v-flex>

                 <v-flex xs6>
                     <v-card-text>
                       <v-text-field
                         label="นามสกุลเดิม"
                         v-model="datas.cousin.parents.momlastname"
                         :rules="[v => !!v || 'required']"
                         required
                       ></v-text-field>
                     </v-card-text>
                 </v-flex>
               </v-layout>
               <v-card-title primary-title>
               <h1 class="headline">ประวัติพี่น้อง</h1>
             </v-card-title>
                 <v-layout row wrap>
                      <v-flex xs6>
                          <v-card-text >
                            <v-text-field
                              label="1.ชื่อ"
                              v-model="datas.cousin.sibling.s1.name"

                            ></v-text-field>
                          </v-card-text>
                      </v-flex>

                      <v-flex xs6>
                          <v-card-text >
                            <v-text-field
                              label="นามสกุล"
                              v-model="datas.cousin.sibling.s1.lastname"

                            ></v-text-field>
                          </v-card-text>
                      </v-flex>
                    </v-layout>

                    <v-layout row wrap>


                         <v-flex xs6>
                             <v-card-text >
                               <v-text-field
                                 label="2.ชื่อ"
                                 v-model="datas.cousin.sibling.s2.name"

                               ></v-text-field>
                             </v-card-text>
                         </v-flex>

                         <v-flex xs6>
                             <v-card-text >
                               <v-text-field
                                 label="นามสกุล"
                                 v-model="datas.cousin.sibling.s2.lastname"

                               ></v-text-field>
                             </v-card-text>
                         </v-flex>

                       </v-layout>
                       <v-layout row wrap>


                            <v-flex xs6>
                                <v-card-text >
                                  <v-text-field
                                    label="3.ชื่อ"
                                    v-model="datas.cousin.sibling.s3.name"

                                  ></v-text-field>
                                </v-card-text>
                            </v-flex>

                            <v-flex xs6>
                                <v-card-text >
                                  <v-text-field
                                    label="นามสกุล"
                                    v-model="datas.cousin.sibling.s3.lastname"

                                  ></v-text-field>
                                </v-card-text>
                            </v-flex>
                          </v-layout>
               </v-card>
            </br>
               <v-card>
                 <v-card-title primary-title>
               <h1 class="headline">การศึกษา</h1>
               </v-card-title>
                 <v-layout row wrap>
               <v-flex xs12>
                <v-card-text>
                  <v-text-field
                    label="ประถมศึกษา โรงเรียน"
                    v-model="datas.education.primary.name"
                    :rules="[v => !!v || 'required']"
                    required
                  ></v-text-field>
                </v-card-text>
              </v-flex>
               </v-layout>
               <v-layout row wrap>
               <v-flex xs4>
                   <v-card-text>
                     <v-text-field
                       label="ตำบล"
                       v-model="datas.education.primary.tumbon"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               <v-flex xs4>
                   <v-card-text>
                     <v-text-field
                       label="อำเภอ"
                       v-model="datas.education.primary.aumpur"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               <v-flex xs4>
                   <v-card-text>
                     <v-text-field
                       label="จังหวัด"
                       v-model="datas.education.primary.province"
                       :rules="[v => !!v || 'required']"
                       required
                     ></v-text-field>
                   </v-card-text>
               </v-flex>
               </v-layout>
               <v-layout row wrap>
             <v-flex xs12>
              <v-card-text>
                <v-text-field
                  label="มัธยมศึกษา โรงเรียน"
                  v-model="datas.education.high.name"
                  :rules="[v => !!v || 'required']"
                  required
                ></v-text-field>
              </v-card-text>
            </v-flex>
             </v-layout>
             <v-layout row wrap>
             <v-flex xs4>
                 <v-card-text>
                   <v-text-field
                     label="ตำบล"
                     v-model="datas.education.high.tumbon"
                     :rules="[v => !!v || 'required']"
                     required
                   ></v-text-field>
                 </v-card-text>
             </v-flex>
             <v-flex xs4>
                 <v-card-text>
                   <v-text-field
                     label="อำเภอ"
                     v-model="datas.education.high.aumpur"
                     :rules="[v => !!v || 'required']"
                     required
                   ></v-text-field>
                 </v-card-text>
             </v-flex>
             <v-flex xs4>
                 <v-card-text>
                   <v-text-field
                     label="จังหวัด"
                     v-model="datas.education.high.province"
                     :rules="[v => !!v || 'required']"
                     required
                   ></v-text-field>
                 </v-card-text>
             </v-flex>
             </v-layout>
             <v-layout row wrap>
            <v-flex xs12>
            <v-card-text>
              <v-text-field
                label="อาชีวศึกษา"
                v-model="datas.education.vocational.name"

              ></v-text-field>
            </v-card-text>
            </v-flex>
            </v-layout>
            <v-layout row wrap>
            <v-flex xs4>
               <v-card-text>
                 <v-text-field
                   label="ตำบล"
                   v-model="datas.education.vocational.tumbon"

                 ></v-text-field>
               </v-card-text>
            </v-flex>
            <v-flex xs4>
               <v-card-text>
                 <v-text-field
                   label="อำเภอ"
                   v-model="datas.education.vocational.aumpur"

                 ></v-text-field>
               </v-card-text>
            </v-flex>
            <v-flex xs4>
               <v-card-text>
                 <v-text-field
                   label="จังหวัด"
                   v-model="datas.education.vocational.province"

                 ></v-text-field>
               </v-card-text>
            </v-flex>
            </v-layout>
            <v-layout row wrap>
            <v-flex xs12>
            <v-card-text>
            <v-text-field
              label="เทคนิคศึกษา"
              v-model="datas.education.technical.name"

            ></v-text-field>
            </v-card-text>
            </v-flex>
            </v-layout>
            <v-layout row wrap>
            <v-flex xs4>
             <v-card-text>
               <v-text-field
                 label="ตำบล"
                 v-model="datas.education.technical.tumbon"

               ></v-text-field>
             </v-card-text>
            </v-flex>
            <v-flex xs4>
             <v-card-text>
               <v-text-field
                 label="อำเภอ"
                 v-model="datas.education.technical.aumpur"

               ></v-text-field>
             </v-card-text>
            </v-flex>
            <v-flex xs4>
             <v-card-text>
               <v-text-field
                 label="จังหวัด"
                 v-model="datas.education.technical.province"

               ></v-text-field>
             </v-card-text>
            </v-flex>
            </v-layout>
            <v-layout row wrap>
            <v-flex xs12>
            <v-card-text>
            <v-text-field
             label="ปริญญาตรี"
             v-model="datas.education.bachelor.name"

            ></v-text-field>
            </v-card-text>
            </v-flex>
            </v-layout>
            <v-layout row wrap>
            <v-flex xs4>
            <v-card-text>
              <v-text-field
                label="ตำบล"
                v-model="datas.education.bachelor.tumbon"

              ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs4>
            <v-card-text>
              <v-text-field
                label="อำเภอ"
                v-model="datas.education.bachelor.aumpur"

              ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs4>
            <v-card-text>
              <v-text-field
                label="จังหวัด"
                v-model="datas.education.bachelor.province"

              ></v-text-field>
            </v-card-text>
            </v-flex>
            </v-layout>
               </v-card>
            </br>
               <v-card>
                 <v-card-title primary-title>
               <h1 class="headline">การทำงานกับบริษัท</h1>
             </v-card-title>
             <v-layout row wrap>
               <v-flex xs6>

                     <v-card-title primary-title>
                     <h2>ทดลองงาน</h2>
                   </v-card-title>
               </v-flex>
               <v-flex xs6>
                   <v-card-text>
                   </v-card-text>
               </v-flex>
             </v-layout>
                 <v-layout row wrap>
             <v-flex xs6>
                <v-card-text>
                  <v-text-field
                    label="ตำแหน่งงาน"
                    v-model="datas.work.probation.position"

                  ></v-text-field>
                </v-card-text>
             </v-flex>
             <v-flex xs6>
                <v-card-text>
                  <v-menu
                 lazy
                 :close-on-content-click="false"
                 transition="scale-transition"
                 offset-y
                 full-width
                 :nudge-right="40"
                 max-width="290px"
                 min-width="290px"
               >
                 <v-text-field
                   slot="activator"
                   label="วันที่"
                   v-model="datas.work.probation.date"
                   prepend-icon="event"
                   readonly
                 ></v-text-field>
                 <v-date-picker v-model="datas.work.probation.date" scrollable actions locale="th">
                   <template slot-scope="{ save, cancel }">
                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                       <v-btn flat color="primary" @click="save">OK</v-btn>
                     </v-card-actions>
                   </template>
                 </v-date-picker>
               </v-menu>
                </v-card-text>
             </v-flex>
             </v-layout>
             <v-layout row wrap>
               <v-flex xs6>
                   <v-card-text>
                     <v-text-field
                       label="ค่าตอบแทน"
                       v-model="datas.work.probation.money"

                       suffix="บาท"
                     ></v-text-field>
                   </v-card-text>
               </v-flex>

               <v-flex xs6>
                   <v-card-text>
                       <input type="file" @change="onChange2('pf')" id="files" name="files[]" multiple>
                     <v-btn color="info" :href = "datas.work.probation.files" target="_blank">old-file</v-btn>
</v-card-text>

               </v-flex>
             </v-layout>
              <!--  -->
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card-text>
            <v-subheader style="font-size: 150%;">พนักงานระดับ</v-subheader>
            </v-card-text>
                </v-flex>
                <v-flex xs2>
                    <v-card-text>
                      <v-text-field
                        label="ระดับ"
                        v-model="datas.work.officer.of1.level"

                      ></v-text-field>
                    </v-card-text>
                </v-flex>
              </v-layout>

                  <v-layout row wrap>
              <v-flex xs6>
                 <v-card-text>
                   <v-text-field
                     label="ตำแหน่งงาน"
                     v-model="datas.work.officer.of1.position"

                   ></v-text-field>
                 </v-card-text>
              </v-flex>
              <v-flex xs6>
                 <v-card-text>
                   <v-menu
                  lazy
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="วันที่"
                    v-model="datas.work.officer.of1.date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="datas.work.officer.of1.date" scrollable actions locale="th">
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
                 </v-card-text>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs6>
                    <v-card-text>
                      <v-text-field
                        label="ค่าตอบแทน"
                        v-model="datas.work.officer.of1.money"

                        suffix="บาท"
                      ></v-text-field>
                    </v-card-text>
                </v-flex>

                <v-flex xs6>
                    <v-card-text>
                      <input type="file" @change="onChange2('of1')" id="filesof1" name="filesof1[]" multiple>
                       <v-btn color="info" :href = "datas.work.officer.of1.files" target="_blank">old-file</v-btn>

                    </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card-text>
            <v-subheader style="font-size: 150%;">พนักงานระดับ</v-subheader>
            </v-card-text>
                </v-flex>
                <v-flex xs2>
                    <v-card-text>
                      <v-text-field
                        label="ระดับ"
                        v-model="datas.work.officer.of2.level"

                      ></v-text-field>
                    </v-card-text>
                </v-flex>
              </v-layout>

                  <v-layout row wrap>
              <v-flex xs6>
                 <v-card-text>
                   <v-text-field
                     label="ตำแหน่งงาน"
                     v-model="datas.work.officer.of2.position"

                   ></v-text-field>
                 </v-card-text>
              </v-flex>
              <v-flex xs6>
                 <v-card-text>
                   <v-menu
                  lazy
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="วันที่"
                    v-model="datas.work.officer.of2.date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="datas.work.officer.of2.date" scrollable actions locale="th">
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
                 </v-card-text>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs6>
                    <v-card-text>
                      <v-text-field
                        label="ค่าตอบแทน"
                        v-model="datas.work.officer.of2.money"

                        suffix="บาท"
                      ></v-text-field>
                    </v-card-text>
                </v-flex>

                <v-flex xs6>
                    <v-card-text>
                    <input type="file" @change="onChange2('of2')" id="filesof2" name="filesof2[]" multiple>
                    <v-btn color="info" :href = "datas.work.officer.of2.files" target="_blank">old-file</v-btn>
                    </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card-text>
            <v-subheader style="font-size: 150%;">พนักงานระดับ</v-subheader>
            </v-card-text>
                </v-flex>
                <v-flex xs2>
                    <v-card-text>
                      <v-text-field
                        label="ระดับ"
                        v-model="datas.work.officer.of3.level"

                      ></v-text-field>
                    </v-card-text>
                </v-flex>
              </v-layout>

                  <v-layout row wrap>
              <v-flex xs6>
                 <v-card-text>
                   <v-text-field
                     label="ตำแหน่งงาน"
                     v-model="datas.work.officer.of3.position"

                   ></v-text-field>
                 </v-card-text>
              </v-flex>
              <v-flex xs6>
                 <v-card-text>
                   <v-menu
                  lazy
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="วันที่"
                    v-model="datas.work.officer.of3.date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="datas.work.officer.of3.date" scrollable actions locale="th">
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
                 </v-card-text>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs6>
                    <v-card-text>
                      <v-text-field
                        label="ค่าตอบแทน"
                        v-model="datas.work.officer.of3.money"

                        suffix="บาท"
                      ></v-text-field>
                    </v-card-text>
                </v-flex>

                <v-flex xs6>
                    <v-card-text>
                    <input type="file" @change="onChange2('of3')" id="filesof3" name="filesof3[]" multiple>
                    <v-btn color="info" :href = "datas.work.officer.of3.files" target="_blank">old-file</v-btn>

                    </v-card-text>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs2>
                  <v-card-text>
            <v-subheader style="font-size: 150%;">พนักงานระดับ</v-subheader>
            </v-card-text>
                </v-flex>
                <v-flex xs2>
                    <v-card-text>
                      <v-text-field
                        label="ระดับ"
                        v-model="datas.work.officer.of4.level"

                      ></v-text-field>
                    </v-card-text>
                </v-flex>
              </v-layout>

                  <v-layout row wrap>
              <v-flex xs6>
                 <v-card-text>
                   <v-text-field
                     label="ตำแหน่งงาน"
                     v-model="datas.work.officer.of4.position"

                   ></v-text-field>
                 </v-card-text>
              </v-flex>
              <v-flex xs6>
                 <v-card-text>
                   <v-menu
                  lazy
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  full-width
                  :nudge-right="40"
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="วันที่"
                    v-model="datas.work.officer.of4.date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="datas.work.officer.of4.date" scrollable actions locale="th">
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-menu>
                 </v-card-text>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs6>
                    <v-card-text>
                      <v-text-field
                        label="ค่าตอบแทน"
                        v-model="datas.work.officer.of4.money"

                        suffix="บาท"
                      ></v-text-field>
                    </v-card-text>
                </v-flex>

                <v-flex xs6>
                    <v-card-text>
                    <input type="file" @change="onChange2('of4')" id="filesof4" name="filesof4[]" multiple>
                    <v-btn color="info" :href = "datas.work.officer.of4.files" target="_blank">old-file</v-btn>

                    </v-card-text>
                </v-flex>
              </v-layout>
             </v-card>
             <!--  --></br>
             <v-card>
               <v-card-title primary-title>
             <h1 class="headline">ประวัติการอบรม</h1>
            </v-card-title>
               <v-layout row wrap>
            <v-flex xs7>
              <v-card-text>
                <v-text-field
                  label="1"
                  v-model="datas.train.t1.info"


                ></v-text-field>
              </v-card-text>
            </v-flex>
            <v-flex xs3>
              <v-card-text></br>
                <input type="file" @change="onChange2('t1')" id="filest1" name="filest1[]" multiple>
                <v-btn color="info" :href = "datas.train.t1.files" target="_blank">old-file</v-btn>
              </v-card-text>
            </v-flex>
            <v-flex xs2>
              <v-card-text>
                <v-menu
               lazy
               :close-on-content-click="false"
               transition="scale-transition"
               offset-y
               full-width
               :nudge-right="40"
               max-width="290px"
               min-width="290px"
             >
               <v-text-field
                 slot="activator"
                 label="วันที่"
                 v-model="datas.train.t1.date"
                 prepend-icon="event"
                 readonly
               ></v-text-field>
               <v-date-picker v-model="datas.train.t1.date" scrollable actions locale="th">
                 <template slot-scope="{ save, cancel }">
                   <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                     <v-btn flat color="primary" @click="save">OK</v-btn>
                   </v-card-actions>
                 </template>
               </v-date-picker>
             </v-menu>
              </v-card-text>
            </v-flex>
            </v-layout>

            <v-layout row wrap>
            <v-flex xs7>
            <v-card-text>
            <v-text-field
              label="2"
              v-model="datas.train.t2.info"


            ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs3>
            <v-card-text></br>
            <input type="file" @change="onChange2('t2')" id="filest2" name="filest2[]" multiple>
            <v-btn color="info" :href = "datas.train.t2.files" target="_blank">old-file</v-btn>
            </v-card-text>
            </v-flex>
            <v-flex xs2>
            <v-card-text>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
             slot="activator"
             label="วันที่"
             v-model="datas.train.t2.date"
             prepend-icon="event"
             readonly
            ></v-text-field>
            <v-date-picker v-model="datas.train.t2.date" scrollable actions locale="th">
             <template slot-scope="{ save, cancel }">
               <v-card-actions>
                 <v-spacer></v-spacer>
                 <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                 <v-btn flat color="primary" @click="save">OK</v-btn>
               </v-card-actions>
             </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            </v-layout>

            <v-layout row wrap>
            <v-flex xs7>
            <v-card-text>
            <v-text-field
             label="3"
             v-model="datas.train.t3.info"


            ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs3>
            <v-card-text></br>
            <input type="file" @change="onChange2('t3')" id="filest3" name="filest3[]" multiple>
            <v-btn color="info" :href = "datas.train.t3.files" target="_blank">old-file</v-btn>
            </v-card-text>
            </v-flex>
            <v-flex xs2>
            <v-card-text>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            label="วันที่"
            v-model="datas.train.t3.date"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="datas.train.t3.date" scrollable actions locale="th">
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            </v-layout>

            <v-layout row wrap>
            <v-flex xs7>
            <v-card-text>
            <v-text-field
             label="4"
             v-model="datas.train.t4.info"


            ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs3>
            <v-card-text></br>
            <input type="file" @change="onChange2('t4')" id="filest4" name="filest4[]" multiple>
            <v-btn color="info" :href = "datas.train.t4.files" target="_blank">old-file</v-btn>
            </v-card-text>
            </v-flex>
            <v-flex xs2>
            <v-card-text>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            label="วันที่"
            v-model="datas.train.t4.date"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="datas.train.t4.date" scrollable actions locale="th">
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            </v-layout>

            <v-layout row wrap>
            <v-flex xs7>
            <v-card-text>
            <v-text-field
             label="5"
             v-model="datas.train.t5.info"


            ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs3>
            <v-card-text></br>
            <input type="file" @change="onChange2('t5')" id="filest5" name="filest5[]" multiple>
            <v-btn color="info" :href = "datas.train.t5.files" target="_blank">old-file</v-btn>
            </v-card-text>
            </v-flex>
            <v-flex xs2>
            <v-card-text>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            label="วันที่"
            v-model="datas.train.t5.date"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="datas.train.t5.date" scrollable actions locale="th">
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            </v-layout>

            <v-layout row wrap>
            <v-flex xs7>
            <v-card-text>
            <v-text-field
             label="6"
             v-model="datas.train.t6.info"


            ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs3>
            <v-card-text></br>
            <input type="file" @change="onChange2('t6')" id="filest6" name="filest6[]" multiple>
            <v-btn color="info" :href = "datas.train.t6.files" target="_blank">old-file</v-btn>
            </v-card-text>
            </v-flex>
            <v-flex xs2>
            <v-card-text>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            label="วันที่"
            v-model="datas.train.t6.date"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="datas.train.t6.date" scrollable actions locale="th">
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            </v-layout>

            <v-layout row wrap>
            <v-flex xs7>
            <v-card-text>
            <v-text-field
             label="7"
             v-model="datas.train.t7.info"


            ></v-text-field>
            </v-card-text>
            </v-flex>
            <v-flex xs3>
            <v-card-text></br>
            <input type="file" @change="onChange2('t7')" id="filest7" name="filest7[]" multiple>
            <v-btn color="info" :href = "datas.train.t7.files" target="_blank">old-file</v-btn>
            </v-card-text>
            </v-flex>
            <v-flex xs2>
            <v-card-text>
            <v-menu
            lazy
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40"
            max-width="290px"
            min-width="290px"
            >
            <v-text-field
            slot="activator"
            label="วันที่"
            v-model="datas.train.t7.date"
            prepend-icon="event"
            readonly
            ></v-text-field>
            <v-date-picker v-model="datas.train.t7.date" scrollable actions locale="th">
            <template slot-scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
            </v-date-picker>
            </v-menu>
            </v-card-text>
            </v-flex>
            </v-layout>

            </v-card>
            </br>
            <v-alert
               type="success"
               :value="alert"
               transition="scale-transition"
             >
               !!อย่าเปลี่ยนหน้าเว็บ กรุณารอสักครู่ ระบบกำลังแก้ไขข้อมูล
             </v-alert>
            <v-btn
               @click="submit2"
               :disabled="!valid"
             >
               update
             </v-btn>

                </v-form>

</template>

<script>
import {db, values, str} from '@/components/firebase'
import PictureInput from 'vue-picture-input'
export default {
  $_veeValidate: {
    validator: 'new'
  },
  async created () {
    window.scrollTo(0, 0)
    // setTimeout(() => {
    //     // var vm = this
    //   this.get = this.dataTouse
    //   this.allname = this.get.map(information => information.information.name + ' ' + information.information.lastname)
    //   console.log(this.allname)
    // }, 2500)
  },
  async mounted () {
    await this.$bindAsArray('todos', values, null, () => {
      this.get = this.todos
      this.allname = this.get.map(information => information.information.name + ' ' + information.information.lastname)
      // console.log('343')
    })
    // console.log(this.todos)
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (type) {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image || this.$refs.pictureInput2.image) {
        // console.log(this.$refs.pictureInput2.image)
        // console.log(type)
        if (type === 'pic') {
          this.img = this.$refs.pictureInput2.image
        } else {
          this.card = this.$refs.pictureInput.image
        }
      } else {
        // console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    async submit () {
      this.subname = this.e1.substr(0, this.e1.indexOf(' '))
      this.sublastname = this.e1.substr(this.e1.indexOf(' ') + 1)
      this.datas = this.get.find(data => data.information.name === this.subname || data.information.lastname === this.sublastnamename)
      // console.log(this.datas)
    },
    async submit2 () {
      if (this.$refs.form.validate()) {
        window.scrollTo(0, document.body.scrollHeight)
        this.alert = true
        try {
          if (this.card === '') {} else {
            let res = await str.ref().child(this.datas.information.id + ' card').putString(this.card, 'data_url')
            this.datas.picture.card = res.downloadURL
          }
          if (this.img === '') {} else {
            let ress = await str.ref().child(this.datas.information.id + ' img').putString(this.img, 'data_url')
            this.datas.picture.image = ress.downloadURL
          }
          if (this.pffile === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' pf').put(this.pffile)
            this.datas.work.probation.files = resfile.downloadURL
          }
          if (this.of1 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' of1').put(this.of1)
            this.datas.work.officer.of1.files = resfile.downloadURL
          }
          if (this.of2 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' of2').put(this.of2)
            this.datas.work.officer.of2.files = resfile.downloadURL
          }
          if (this.of3 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' of3').put(this.of3)
            this.datas.work.officer.of3.files = resfile.downloadURL
          }
          if (this.of4 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' of4').put(this.of4)
            this.datas.work.officer.of4.files = resfile.downloadURL
          }
          if (this.t1 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t1').put(this.t1)
            this.datas.train.t1.files = resfile.downloadURL
          }
          if (this.t2 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t2').put(this.t2)
            this.datas.train.t2.files = resfile.downloadURL
          }
          if (this.t3 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t3').put(this.t3)
            this.datas.train.t3.files = resfile.downloadURL
          }
          if (this.t4 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t4').put(this.t4)
            this.datas.train.t4.files = resfile.downloadURL
          }
          if (this.t5 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t5').put(this.t5)
            this.datas.train.t5.files = resfile.downloadURL
          }
          if (this.t6 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t6').put(this.t6)
            this.datas.train.t6.files = resfile.downloadURL
          }
          if (this.t7 === '') {} else {
            let resfile = await str.ref().child(this.datas.information.id + ' t7').put(this.t7)
            this.datas.train.t7.files = resfile.downloadURL
          }
          db.ref().child('/data/' + this.datas['.key']).update({
            address: this.datas.address,
            children: this.datas.children,
            cousin: this.datas.cousin,
            education: this.datas.education,
            information: this.datas.information,
            picture: this.datas.picture,
            train: this.datas.train,
            work: this.datas.work
          })
          console.log('complete!')
          alert('แก้ไขข้อมูลเสร็จเรียบร้อย')
          location.reload()
        } catch (error) {
          console.log(error)
        }
      } else {
        alert('กรุณากรอกให้ครบ')
      }
    },
    clear () {
      this.$refs.form.reset()
    },
    onChange2 (type) {
      console.log('New file!')
      // var vm = this
      if (type === 'pf') {
        this.pffile = document.getElementById('files').files[0]
        // console.log(this.pffile)
      } else if (type === 'of1') {
        this.of1 = document.getElementById('filesof1').files[0]
        // console.log(this.of1)
      } else if (type === 'of2') {
        this.of2 = document.getElementById('filesof2').files[0]
        // console.log(this.of2)
      } else if (type === 'of3') {
        this.of3 = document.getElementById('filesof3').files[0]
        // console.log(this.of3)
      } else if (type === 'of4') {
        this.of4 = document.getElementById('filesof4').files[0]
        // console.log(this.of4)
      } else if (type === 't1') {
        this.t1 = document.getElementById('filest1').files[0]
        // console.log(this.t1)
      } else if (type === 't2') {
        this.t2 = document.getElementById('filest2').files[0]
        // console.log(this.t2)
      } else if (type === 't3') {
        this.t3 = document.getElementById('filest3').files[0]
        // console.log(this.t3)
      } else if (type === 't4') {
        this.t4 = document.getElementById('filest4').files[0]
        // console.log(this.t4)
      } else if (type === 't5') {
        this.t5 = document.getElementById('filest5').files[0]
        // console.log(this.t5)
      } else if (type === 't6') {
        this.t6 = document.getElementById('filest6').files[0]
        // console.log(this.t6)
      } else if (type === 't7') {
        this.t7 = document.getElementById('filest7').files[0]
        // console.log(this.t7)
      }
    }
  },
  data () {
    return {
      valid: true,
      alert: false,
      data: '',
      allname: [],
      e1: '',
      get: '',
      todos: [],
      subname: '',
      sublastname: '',
      img: '',
      card: '',
      pffile: '',
      of1: '',
      of2: '',
      of3: '',
      of4: '',
      t1: '',
      t2: '',
      t3: '',
      t4: '',
      t5: '',
      t6: '',
      t7: '',
      datas: {
        picture: {
          image: '',
          card: '',
          date: ''
        },
        information: {
          name: '',
          lastname: '',
          wifename: '',
          wifelastname: '',
          id: ''
        },
        children: {
          child1: {
            childname: '',
            childlastname: ''
          },
          child2: {
            childname: '',
            childlastname: ''
          },
          child3: {
            childname: '',
            childlastname: ''
          }
        },
        address: {
          addressnow: {
            housenumber: '',
            soi: '',
            road: '',
            tumbon: '',
            aumpur: '',
            province: '',
            condoname: '',
            zipcode: ''
          },
          oldaddress: {
            tumbon: '',
            aumpur: '',
            province: '',
            zipcode: ''
          },
          bornaddress: {
            housenumber: '',
            tumbon: '',
            aumpur: '',
            province: '',
            zipcode: ''
          }
        },
        cousin: {
          parents: {
            dadname: '',
            dadlastname: '',
            momname: '',
            momlastname: ''
          },
          sibling: {
            s1: {
              name: '',
              lastname: ''
            },
            s2: {
              name: '',
              lastname: ''
            },
            s3: {
              name: '',
              lastname: ''
            }
          }
        },
        education: {
          primary: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          high: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          vocational: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          technical: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          bachelor: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          }
        },
        work: {
          probation: {
            position: '',
            date: '',
            money: '',
            files: ''
          },
          officer: {
            of1: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            },
            of2: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            },
            of3: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            },
            of4: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            }
          }
        },
        train: {
          t1: {
            info: '',
            files: '',
            date: ''
          },
          t2: {
            info: '',
            files: '',
            date: ''
          },
          t3: {
            info: '',
            files: '',
            date: ''
          },
          t4: {
            info: '',
            files: '',
            date: ''
          },
          t5: {
            info: '',
            files: '',
            date: ''
          },
          t6: {
            info: '',
            files: '',
            date: ''
          },
          t7: {
            info: '',
            files: '',
            date: ''
          }
        }
      },
      allinfo: {
        picture: {
          image: '',
          card: '',
          date: ''
        },
        information: {
          name: '',
          lastname: '',
          wifename: '',
          wifelastname: '',
          id: ''
        },
        children: {
          child1: {
            childname: '',
            childlastname: ''
          },
          child2: {
            childname: '',
            childlastname: ''
          },
          child3: {
            childname: '',
            childlastname: ''
          }
        },
        address: {
          addressnow: {
            housenumber: '',
            soi: '',
            road: '',
            tumbon: '',
            aumpur: '',
            province: '',
            condoname: '',
            zipcode: ''
          },
          oldaddress: {
            tumbon: '',
            aumpur: '',
            province: '',
            zipcode: ''
          },
          bornaddress: {
            housenumber: '',
            tumbon: '',
            aumpur: '',
            province: '',
            zipcode: ''
          }
        },
        cousin: {
          parents: {
            dadname: '',
            dadlastname: '',
            momname: '',
            momlastname: ''
          },
          sibling: {
            s1: {
              name: '',
              lastname: ''
            },
            s2: {
              name: '',
              lastname: ''
            },
            s3: {
              name: '',
              lastname: ''
            }
          }
        },
        education: {
          primary: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          high: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          vocational: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          technical: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          },
          bachelor: {
            name: '',
            tumbon: '',
            aumpur: '',
            province: ''
          }
        },
        work: {
          probation: {
            position: '',
            date: '',
            money: '',
            files: ''
          },
          officer: {
            of1: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            },
            of2: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            },
            of3: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            },
            of4: {
              level: '',
              position: '',
              date: '',
              money: '',
              files: ''
            }
          }
        },
        train: {
          t1: {
            info: '',
            files: '',
            date: ''
          },
          t2: {
            info: '',
            files: '',
            date: ''
          },
          t3: {
            info: '',
            files: '',
            date: ''
          },
          t4: {
            info: '',
            files: '',
            date: ''
          },
          t5: {
            info: '',
            files: '',
            date: ''
          },
          t6: {
            info: '',
            files: '',
            date: ''
          },
          t7: {
            info: '',
            files: '',
            date: ''
          }
        }
      }
    }
  }
}
</script>

<style lang="css">

</style>
