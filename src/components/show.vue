<template>
<form>

    <v-card>
  <v-layout row wrap>
    <v-flex xs10>

<v-card-text>
          <h1>เลือกชื่อ</h1>

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
</br>
<v-layout row wrap>
<v-flex xs6>

<v-card-text class="px-0">
<v-card-media :src="allinfo.picture.image" height="400px" >
</v-card-media>
</br>
<v-text-field
label="วันที่ ที่ถ่ายภาพ"
:value="allinfo.picture.date"
readonly
></v-text-field>

</v-card-text>

</v-flex>
<v-flex xs6>
<v-card-text class="px-0">
 <v-card-media :src="allinfo.picture.card" height="300px" >
 </v-card-media>
</v-card-text>
</v-flex>
</v-layout>


</br>
          <v-card>
            <v-card-title primary-title>
          <h1 class="headline">ประวัติ</h1>

          </v-card-title>
            <v-layout row wrap>
          <v-flex xs6>
           <v-card-text>
             <v-text-field
               label="ชื่อ"
              :value="allinfo.information.name"
              readonly
             ></v-text-field>
           </v-card-text>
          </v-flex>
          <v-flex xs6>
           <v-card-text>
             <v-text-field
               label="นามสกุล"
               :value="allinfo.information.lastname"
               readonly
             ></v-text-field>
           </v-card-text>
          </v-flex>
          </v-layout>
          <v-layout row wrap>
          <v-flex xs6>
              <v-card-text>
                <v-text-field
                  label="ชื่อภรรยา"
                  :value="allinfo.information.wifename"
                  readonly
                ></v-text-field>
              </v-card-text>
          </v-flex>

          <v-flex xs6>
              <v-card-text>
                <v-text-field
                  label="นามสกุลเดิม"
                  :value="allinfo.information.wifelastname"
                  readonly
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
                             :value="allinfo.children.child1.name"
                             readonly
                           ></v-text-field>
                         </v-card-text>
                     </v-flex>

                     <v-flex xs6>
                         <v-card-text >
                           <v-text-field
                             label="นามสกุล"
                             :value="allinfo.children.child1.lastname"
                             readonly

                           ></v-text-field>
                         </v-card-text>
                     </v-flex>
                   </v-layout>

                   <v-layout row wrap>
                        <v-flex xs6>
                            <v-card-text >
                              <v-text-field
                                label="2.ชื่อ"
                                :value="allinfo.children.child2.name"
                                readonly

                              ></v-text-field>
                            </v-card-text>
                        </v-flex>

                        <v-flex xs6>
                            <v-card-text >
                              <v-text-field
                                label="นามสกุล"
                                :value="allinfo.children.child2.lastname"
                                readonly

                              ></v-text-field>
                            </v-card-text>
                        </v-flex>

                      </v-layout>
                      <v-layout row wrap>
                           <v-flex xs6>
                               <v-card-text >
                                 <v-text-field
                                   label="3.ชื่อ"
                                   :value="allinfo.children.child3.name"
                                   readonly
                                 ></v-text-field>
                               </v-card-text>
                           </v-flex>

                           <v-flex xs6>
                               <v-card-text >
                                 <v-text-field
                                   label="นามสกุล"
                                   :value="allinfo.children.child3.lastname"
                                   readonly

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
                                        :value="allinfo.address.addressnow.housenumber"
                                        readonly

                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card-text>
                                      <v-text-field
                                        label="ซอย"
                                        :value="allinfo.address.addressnow.soi"
                                        readonly
                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card-text>
                                      <v-text-field
                                        label="ถนน"
                                        :value="allinfo.address.addressnow.road"
                                        readonly
                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                              </v-layout>
                              <v-layout row wrap>
                         <v-flex xs4>
                             <v-card-text>
                               <v-text-field
                                 label="ตำบล"
                                 :value="allinfo.address.addressnow.tumbon"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         <v-flex xs4>
                             <v-card-text>
                               <v-text-field
                               label="ตำบล"
                               :value="allinfo.address.addressnow.aumpur"
                               readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         <v-flex xs4>
                             <v-card-text>
                               <v-text-field
                                 label="จังหวัด"
                                 :value="allinfo.address.addressnow.province"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                       </v-layout>
                       <v-layout row wrap>
                     <v-flex xs8>
                      <v-card-text>
                        <v-text-field
                          label="คอนโด / อพาร์ทเม้นท์"
                          :value="allinfo.address.addressnow.condoname"
                          readonly
                        ></v-text-field>
                      </v-card-text>
                     </v-flex>
                     <v-flex xs4>
                      <v-card-text>
                        <v-text-field
                          label="รหัสไปรษณีย์"
                          :value="allinfo.address.addressnow.zipcode"
                          readonly
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
                                        :value="allinfo.address.oldaddress.tumbon"
                                        readonly
                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                                <v-flex xs6>
                                    <v-card-text>
                                      <v-text-field
                                        label="อำเภอ"
                                        :value="allinfo.address.oldaddress.aumpur"
                                        readonly
                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                              </v-layout>
                              <v-layout row wrap>
                         <v-flex xs6>
                             <v-card-text>
                               <v-text-field
                                 label="จังหวัด"
                                 :value="allinfo.address.oldaddress.province"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         <v-flex xs6>
                             <v-card-text>
                               <v-text-field
                                 label="รหัสไปรษณีย์"
                                 :value="allinfo.address.oldaddress.zipcode"
                                 readonly
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
                                     :value="allinfo.address.bornaddress.housenumber"
                                     readonly
                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                             <v-flex xs4>
                                 <v-card-text>
                                   <v-text-field
                                     label="ตำบล"
                                     :value="allinfo.address.bornaddress.tumbon"
                                     readonly
                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                             <v-flex xs4>
                                 <v-card-text>
                                   <v-text-field
                                     label="อำเภอ"
                                     :value="allinfo.address.bornaddress.aumpur"
                                     readonly
                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                         <v-flex xs6>
                             <v-card-text>
                               <v-text-field
                                 label="จังหวัด"
                                 :value="allinfo.address.bornaddress.province"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         <v-flex xs6>
                             <v-card-text>
                               <v-text-field
                                 label="รหัสไปรษณีย์"
                                 :value="allinfo.address.bornaddress.zipcode"
                                 readonly
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
                                :value="allinfo.cousin.parents.dadname"
                                readonly
                              ></v-text-field>
                            </v-card-text>
                          </v-flex>
                          <v-flex xs6>
                            <v-card-text>
                              <v-text-field
                                label="นามสกุล"
                                :value="allinfo.cousin.parents.dadlastname"
                                readonly
                              ></v-text-field>
                            </v-card-text>
                          </v-flex>
                          </v-layout>
                          <v-layout row wrap>
                           <v-flex xs6>
                               <v-card-text>
                                 <v-text-field
                                   label="ชื่อมารดา"
                                   :value="allinfo.cousin.parents.momname"
                                   readonly
                                 ></v-text-field>
                               </v-card-text>
                           </v-flex>

                           <v-flex xs6>
                               <v-card-text>
                                 <v-text-field
                                   label="นามสกุลเดิม"
                                   :value="allinfo.cousin.parents.momlastname"
                                   readonly
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
                                        :value="allinfo.cousin.sibling.s1.name"
                                        readonly
                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>

                                <v-flex xs6>
                                    <v-card-text >
                                      <v-text-field
                                        label="นามสกุล"
                                        :value="allinfo.cousin.sibling.s1.lastname"
                                        readonly
                                      ></v-text-field>
                                    </v-card-text>
                                </v-flex>
                              </v-layout>

                              <v-layout row wrap>


                                   <v-flex xs6>
                                       <v-card-text >
                                         <v-text-field
                                           label="2.ชื่อ"
                                           :value="allinfo.cousin.sibling.s2.name"
                                           readonly
                                         ></v-text-field>
                                       </v-card-text>
                                   </v-flex>

                                   <v-flex xs6>
                                       <v-card-text >
                                         <v-text-field
                                           label="นามสกุล"
                                           :value="allinfo.cousin.sibling.s2.lastname"
                                           readonly

                                         ></v-text-field>
                                       </v-card-text>
                                   </v-flex>

                                 </v-layout>
                                 <v-layout row wrap>


                                      <v-flex xs6>
                                          <v-card-text >
                                            <v-text-field
                                              label="3.ชื่อ"
                                              :value="allinfo.cousin.sibling.s3.name"
                                              readonly
                                            ></v-text-field>
                                          </v-card-text>
                                      </v-flex>

                                      <v-flex xs6>
                                          <v-card-text >
                                            <v-text-field
                                              label="นามสกุล"
                                              :value="allinfo.cousin.sibling.s3.lastname"
                                              readonly
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
                                  :value="allinfo.education.primary.name"
                                  readonly
                                ></v-text-field>
                              </v-card-text>
                            </v-flex>
                             </v-layout>
                             <v-layout row wrap>
                             <v-flex xs4>
                                 <v-card-text>
                                   <v-text-field
                                     label="ตำบล"
                                     :value="allinfo.education.primary.tumbon"
                                     readonly
                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                             <v-flex xs4>
                                 <v-card-text>
                                   <v-text-field
                                     label="อำเภอ"
                                     :value="allinfo.education.primary.aumpur"
                                     readonly
                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                             <v-flex xs4>
                                 <v-card-text>
                                   <v-text-field
                                     label="จังหวัด"
                                     :value="allinfo.education.primary.province"
                                     readonly
                                   ></v-text-field>
                                 </v-card-text>
                             </v-flex>
                             </v-layout>
                             <v-layout row wrap>
                           <v-flex xs12>
                            <v-card-text>
                              <v-text-field
                                label="มัธยมศึกษา โรงเรียน"
                                :value="allinfo.education.high.name"
                                readonly
                              ></v-text-field>
                            </v-card-text>
                          </v-flex>
                           </v-layout>
                           <v-layout row wrap>
                           <v-flex xs4>
                               <v-card-text>
                                 <v-text-field
                                   label="ตำบล"
                                   :value="allinfo.education.high.tumbon"
                                   readonly
                                 ></v-text-field>
                               </v-card-text>
                           </v-flex>
                           <v-flex xs4>
                               <v-card-text>
                                 <v-text-field
                                   label="อำเภอ"
                                   :value="allinfo.education.high.aumpur"
                                   readonly
                                 ></v-text-field>
                               </v-card-text>
                           </v-flex>
                           <v-flex xs4>
                               <v-card-text>
                                 <v-text-field
                                   label="จังหวัด"
                                   :value="allinfo.education.high.province"
                                   readonly
                                 ></v-text-field>
                               </v-card-text>
                           </v-flex>
                           </v-layout>
                           <v-layout row wrap>
                         <v-flex xs12>
                          <v-card-text>
                            <v-text-field
                              label="อาชีวศึกษา"
                              :value="allinfo.education.vocational.name"
                              readonly
                            ></v-text-field>
                          </v-card-text>
                        </v-flex>
                         </v-layout>
                         <v-layout row wrap>
                         <v-flex xs4>
                             <v-card-text>
                               <v-text-field
                                 label="ตำบล"
                                 :value="allinfo.education.vocational.tumbon"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         <v-flex xs4>
                             <v-card-text>
                               <v-text-field
                                 label="อำเภอ"
                                 :value="allinfo.education.vocational.aumpur"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         <v-flex xs4>
                             <v-card-text>
                               <v-text-field
                                 label="จังหวัด"
                                 :value="allinfo.education.vocational.province"
                                 readonly
                               ></v-text-field>
                             </v-card-text>
                         </v-flex>
                         </v-layout>
                         <v-layout row wrap>
                        <v-flex xs12>
                        <v-card-text>
                          <v-text-field
                            label="เทคนิคศึกษา"
                            :value="allinfo.education.technical.name"
                            readonly
                          ></v-text-field>
                        </v-card-text>
                        </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                        <v-flex xs4>
                           <v-card-text>
                             <v-text-field
                               label="ตำบล"
                               :value="allinfo.education.technical.tumbon"
                               readonly
                             ></v-text-field>
                           </v-card-text>
                        </v-flex>
                        <v-flex xs4>
                           <v-card-text>
                             <v-text-field
                               label="อำเภอ"
                               :value="allinfo.education.technical.aumpur"
                               readonly
                             ></v-text-field>
                           </v-card-text>
                        </v-flex>
                        <v-flex xs4>
                           <v-card-text>
                             <v-text-field
                               label="จังหวัด"
                               :value="allinfo.education.technical.province"
                               readonly
                             ></v-text-field>
                           </v-card-text>
                        </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                        <v-flex xs12>
                        <v-card-text>
                         <v-text-field
                           label="ปริญญาตรี"
                           :value="allinfo.education.bachelor.name"
                           readonly
                         ></v-text-field>
                        </v-card-text>
                        </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                        <v-flex xs4>
                          <v-card-text>
                            <v-text-field
                              label="ตำบล"
                              :value="allinfo.education.bachelor.tumbon"
                              readonly
                            ></v-text-field>
                          </v-card-text>
                        </v-flex>
                        <v-flex xs4>
                          <v-card-text>
                            <v-text-field
                              label="อำเภอ"
                              :value="allinfo.education.bachelor.aumpur"
                              readonly
                            ></v-text-field>
                          </v-card-text>
                        </v-flex>
                        <v-flex xs4>
                          <v-card-text>
                            <v-text-field
                              label="จังหวัด"
                              :value="allinfo.education.bachelor.province"
                              readonly
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
     :value="allinfo.work.probation.position"
     readonly
   ></v-text-field>
 </v-card-text>
</v-flex>
<v-flex xs6>
 <v-card-text>
  <v-text-field
    label="วันที่"
    :value="allinfo.work.probation.date"
    readonly
  ></v-text-field>
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
        :value="allinfo.work.probation.money"
        readonly

        suffix="บาท"
      ></v-text-field>
    </v-card-text>
</v-flex>

<v-flex xs6>
    <v-card-text>
      <v-text-field
<v-btn color="info" :href = "allinfo.work.probation.files" target="_blank">file</v-btn>
      </v-text-field>

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
         :value="allinfo.work.officer.of1.level"
         readonly
       ></v-text-field>
     </v-card-text>
 </v-flex>
</v-layout>

   <v-layout row wrap>
<v-flex xs6>
  <v-card-text>
    <v-text-field
      label="ตำแหน่งงาน"
      :value="allinfo.work.officer.of1.position"
      readonly
    ></v-text-field>
  </v-card-text>
</v-flex>
<v-flex xs6>
  <v-card-text>
   <v-text-field
     label="วันที่"
     :value="allinfo.work.officer.of1.date"
     readonly
   ></v-text-field>

  </v-card-text>
</v-flex>
</v-layout>
<v-layout row wrap>
 <v-flex xs6>
     <v-card-text>
       <v-text-field
         label="ค่าตอบแทน"
         :value="allinfo.work.officer.of1.money"
         readonly
         suffix="บาท"
       ></v-text-field>
     </v-card-text>
 </v-flex>

 <v-flex xs6>
     <v-card-text>
       <v-text-field
       <v-btn color="info" :href = "allinfo.work.officer.of1.files" target="_blank">file</v-btn>
       </v-text-field>
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
         :value="allinfo.work.officer.of2.level"
         readonly
       ></v-text-field>
     </v-card-text>
 </v-flex>
</v-layout>

   <v-layout row wrap>
<v-flex xs6>
  <v-card-text>
    <v-text-field
      label="ตำแหน่งงาน"
      :value="allinfo.work.officer.of2.position"
      readonly
    ></v-text-field>
  </v-card-text>
</v-flex>
<v-flex xs6>
  <v-card-text>

   <v-text-field
     label="วันที่"
     :value="allinfo.work.officer.of2.date"
     readonly
   ></v-text-field>
  </v-card-text>
</v-flex>
</v-layout>
<v-layout row wrap>
 <v-flex xs6>
     <v-card-text>
       <v-text-field
         label="ค่าตอบแทน"
         :value="allinfo.work.officer.of2.money"
         readonly
         suffix="บาท"
       ></v-text-field>
     </v-card-text>
 </v-flex>

 <v-flex xs6>
     <v-card-text>
       <v-text-field
       <v-btn color="info" :href = "allinfo.work.officer.of2.files" target="_blank">file</v-btn>
       </v-text-field>
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
         :value="allinfo.work.officer.of3.level"
         readonly
       ></v-text-field>
     </v-card-text>
 </v-flex>
</v-layout>

   <v-layout row wrap>
<v-flex xs6>
  <v-card-text>
    <v-text-field
      label="ตำแหน่งงาน"
      :value="allinfo.work.officer.of3.position"
      readonly
    ></v-text-field>
  </v-card-text>
</v-flex>
<v-flex xs6>
  <v-card-text>
   <v-text-field
     label="วันที่"
     :value="allinfo.work.officer.of3.date"
     readonly
   ></v-text-field>

  </v-card-text>
</v-flex>
</v-layout>
<v-layout row wrap>
 <v-flex xs6>
     <v-card-text>
       <v-text-field
         label="ค่าตอบแทน"
         :value="allinfo.work.officer.of3.money"
         readonly
         suffix="บาท"
       ></v-text-field>
     </v-card-text>
 </v-flex>

 <v-flex xs6>
     <v-card-text>
       <v-text-field
       <v-btn color="info" :href = "allinfo.work.officer.of3.files" target="_blank">file</v-btn>
       </v-text-field>
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
         :value="allinfo.work.officer.of4.level"
         readonly
       ></v-text-field>
     </v-card-text>
 </v-flex>
</v-layout>

   <v-layout row wrap>
<v-flex xs6>
  <v-card-text>
    <v-text-field
      label="ตำแหน่งงาน"
      :value="allinfo.work.officer.of4.position"
      readonly
    ></v-text-field>
  </v-card-text>
</v-flex>
<v-flex xs6>
  <v-card-text>
   <v-text-field
     label="วันที่"
     :value="allinfo.work.officer.of4.date"
     readonly
   ></v-text-field>
  </v-card-text>
</v-flex>
</v-layout>
<v-layout row wrap>
 <v-flex xs6>
     <v-card-text>
       <v-text-field
         label="ค่าตอบแทน"
         :value="allinfo.work.officer.of4.money"
         readonly
         suffix="บาท"
       ></v-text-field>
     </v-card-text>
 </v-flex>

 <v-flex xs6>
     <v-card-text>
       <v-text-field
       <v-btn color="info" :href = "allinfo.work.officer.of4.files" target="_blank">file</v-btn>
       </v-text-field>
     </v-card-text>
 </v-flex>
</v-layout>
</v-card>
</br>
<v-card>
  <v-card-title primary-title>
<h1 class="headline">ประวัติการอบรม</h1>
</v-card-title>
  <v-layout row wrap>
<v-flex xs7>
 <v-card-text>
   <v-text-field
     label="1"
     :value="allinfo.train.t1.info"
     readonly
   ></v-text-field>
 </v-card-text>
</v-flex>
<v-flex xs3>
 <v-card-text>
   <v-text-field
   <v-btn color="info" :href = "allinfo.train.t1.files" target="_blank">file</v-btn>
   </v-text-field>
 </v-card-text>
</v-flex>
<v-flex xs2>
 <v-card-text>
  <v-text-field
    label="วันที่"
    :value="allinfo.train.t1.date"
    readonly
  ></v-text-field>
 </v-card-text>
</v-flex>
</v-layout>

<v-layout row wrap>
<v-flex xs7>
<v-card-text>
<v-text-field
 label="2"
 :value="allinfo.train.t2.info"
 readonly
></v-text-field>
</v-card-text>
</v-flex>
<v-flex xs3>
<v-card-text>
<v-text-field
  <v-btn color="info" :href = "allinfo.train.t2.files" target="_blank">file</v-btn>
</v-text-field>
</v-card-text>
</v-flex>
<v-flex xs2>
<v-card-text>

<v-text-field

label="วันที่"
:value="allinfo.train.t2.date"
readonly
></v-text-field>

</v-card-text>
</v-flex>
</v-layout>

<v-layout row wrap>
<v-flex xs7>
<v-card-text>
<v-text-field
label="3"
:value="allinfo.train.t3.info"
readonly

></v-text-field>
</v-card-text>
</v-flex>
<v-flex xs3>
<v-card-text>

<v-text-field
 <v-btn color="info" :href = "allinfo.train.t3.files" target="_blank">file</v-btn>
</v-text-field>
</v-card-text>
</v-flex>
<v-flex xs2>
<v-card-text>

<v-text-field
label="วันที่"
:value="allinfo.train.t3.date"
readonly
></v-text-field>

</v-card-text>
</v-flex>
</v-layout>

<v-layout row wrap>
<v-flex xs7>
<v-card-text>
<v-text-field
label="4"
:value="allinfo.train.t4.info"
readonly

></v-text-field>
</v-card-text>
</v-flex>
<v-flex xs3>
<v-card-text>

<v-text-field
 <v-btn color="info" :href = "allinfo.train.t4.files" target="_blank">file</v-btn>
</v-text-field>
</v-card-text>
</v-flex>
<v-flex xs2>
<v-card-text>

<v-text-field
label="วันที่"
:value="allinfo.train.t4.date"
readonly
></v-text-field>
</v-card-text>
</v-flex>
</v-layout>

<v-layout row wrap>
<v-flex xs7>
<v-card-text>
<v-text-field
label="5"
:value="allinfo.train.t5.info"
readonly

></v-text-field>
</v-card-text>
</v-flex>
<v-flex xs3>
<v-card-text>

<v-text-field
 <v-btn color="info" :href = "allinfo.train.t5.files" target="_blank">file</v-btn>
</v-text-field>
</v-card-text>
</v-flex>
<v-flex xs2>
<v-card-text>

<v-text-field
slot="activator"
label="วันที่"
:value="allinfo.train.t5.date"
readonly
></v-text-field>

</v-card-text>
</v-flex>
</v-layout>

<v-layout row wrap>
<v-flex xs7>
<v-card-text>
<v-text-field
label="6"
:value="allinfo.train.t6.info"
readonly

></v-text-field>
</v-card-text>
</v-flex>
<v-flex xs3>
<v-card-text>

<v-text-field
 <v-btn color="info" :href = "allinfo.train.t6.files" target="_blank">file</v-btn>
</v-text-field>
</v-card-text>
</v-flex>
<v-flex xs2>
<v-card-text>

<v-text-field
label="วันที่"
:value="allinfo.train.t6.date"
readonly
></v-text-field>

</v-card-text>
</v-flex>
</v-layout>

<v-layout row wrap>
<v-flex xs7>
<v-card-text>
<v-text-field
label="7"
:value="allinfo.train.t7.info"
readonly

></v-text-field>
</v-card-text>
</v-flex>
<v-flex xs3>
<v-card-text>

<v-text-field
 <v-btn color="info" :href = "allinfo.train.t7.files" target="_blank">file</v-btn>
</v-text-field>
</v-card-text>
</v-flex>
<v-flex xs2>
<v-card-text>

<v-text-field

label="วันที่"
:value="allinfo.train.t7.date"
readonly
></v-text-field>

</v-card-text>
</v-flex>
</v-layout>

</v-card>






        </form>



</template>
<script>
import {values} from '@/components/firebase'
export default {
  methods: {
    submit () {
      this.subname = this.e1.substr(0, this.e1.indexOf(' '))
      this.sublastname = this.e1.substr(this.e1.indexOf(' ') + 1)
      this.allinfo = this.get.find(data => data.information.name === this.subname || data.information.lastname === this.sublastnamename)
      // console.log(this.allinfo)
    }
  },
  data () {
    return {
      data: '',
      todos: [],
      allname: [],
      get: '',
      e1: '',
      subname: '',
      sublastname: '',
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
              money: ''
            },
            of3: {
              level: '',
              position: '',
              date: '',
              money: ''
            },
            of4: {
              level: '',
              position: '',
              date: '',
              money: ''
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
  },
  async mounted () {
    await this.$bindAsArray('todos', values, null, () => {
      this.get = this.todos
      this.allname = this.get.map(information => information.information.name + ' ' + information.information.lastname)
      // console.log('343')
    })
    // console.log(this.todos)
  },
  computed: {
    // playyy () {
    //   this.get = this.dataTouse
    //   this.allname = this.get.map(information => information.information.name + ' ' + information.information.lastname)
    //   // console.log('com')
    //   // console.log(this.allname)
    //   return this.allname
    // }
  },
  // watch: {
  //   dataTouse: function (newval, oldval) {
  //     this.get = newval
  //     console.log(newval)
  //     console.log('555')
  //     this.allname = this.get.map(information => information.information.name + ' ' + information.information.lastname)
  //     console.log(this.allname)
  //   }
  // },
  async created () {
    // setTimeout(() => {
    window.scrollTo(0, 0)
        // var vm = this
    // }, 3000)
  }
}
</script>

<style lang="css">
</style>
