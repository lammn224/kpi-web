<template>
  <div class="topbar-item mr-4">
    <div
      id="kt_quick_user_toggle"
      class="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
    >
      <span
        class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1"
      >
        Xin chào,
      </span>
      <span
        class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3"
      >
        Admin KPI
      </span>
      <span class="svg-icon svg-icon-lg">
        <inline-svg
          :src="require('~/assets/media/svg/icons/General/User.svg')"
        />
      </span>
    </div>

    <div
      id="kt_quick_user"
      ref="kt_quick_user"
      class="offcanvas offcanvas-right p-10"
    >
      <!--begin::Header-->
      <div
        class="offcanvas-header d-flex align-items-center justify-content-between pb-5"
      >
        <h3 class="font-weight-bold m-0">Thông tin người dùng</h3>
        <a
          id="kt_quick_user_close"
          href="#"
          class="btn btn-xs btn-icon btn-light btn-hover-primary"
        >
          <i class="ki ki-close icon-xs text-muted"></i>
        </a>
      </div>
      <!--end::Header-->

      <!--begin::Content-->
      <perfect-scrollbar
        class="offcanvas-content pr-5 mr-n5 scroll"
        style="max-height: 90vh; position: relative"
      >
        <!--begin::Header-->
        <div class="d-flex align-items-center mt-5">
          <div class="symbol symbol-100 mr-5">
            <img
              class="symbol-label"
              src="~/assets/media/users/blank.png"
              alt=""
            />
            <i class="symbol-badge bg-success"></i>
          </div>
          <div class="d-flex flex-column">
            <a
              href="#"
              class="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              Admin KPI
            </a>
            <div class="text-muted mt-1">Role Admin</div>
            <div class="navi mt-2">
              <a href="#" class="navi-item">
                <span class="navi-link p-0 pb-2">
                  <span class="navi-icon mr-1">
                    <span class="svg-icon svg-icon-lg svg-icon-primary">
                      <!--begin::Svg Icon-->
                      <inline-svg
                        :src="
                          require('assets/media/svg/icons/Communication/Mail-notification.svg')
                        "
                      />
                      <!--end::Svg Icon-->
                    </span>
                  </span>
                  <span class="navi-text text-muted text-hover-primary">
                    contact-kpi@viettel.com.vn
                  </span>
                </span>
              </a>
            </div>
            <button class="btn btn-light-primary btn-bold" @click="onLogout">
              Đăng xuất
            </button>
          </div>
        </div>
        <!--end::Header-->
        <div class="separator separator-dashed mt-8 mb-5"></div>
        <!--begin::Nav-->
        <div class="navi navi-spacer-x-0 p-0">
          <!--begin::Item-->
          <nuxt-link
            to="/profile"
            href="#"
            class="navi-item"
            @click.native="closeOffcanvas"
          >
            <div class="navi-link">
              <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                  <span class="svg-icon svg-icon-md svg-icon-primary">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      :src="
                        require('~/assets/media/svg/icons/General/Notification2.svg')
                      "
                    />
                    <!--end::Svg Icon-->
                  </span>
                </div>
              </div>
              <div class="navi-text">
                <nuxt-link to="/profile">
                  <div class="font-weight-bold">Thông tin cá nhân</div>
                </nuxt-link>
                <div class="text-muted">Cấu hình tài khoản</div>
              </div>
            </div>
          </nuxt-link>
          <!--end:Item-->
        </div>
        <!--end::Nav-->
      </perfect-scrollbar>
      <!--end::Content-->
    </div>
  </div>
</template>

<script>
import { ROLES } from '../../../../constants/role.constant'
import KTLayoutQuickUser from '@/assets/js/layout/extended/quick-user.js'
import KTOffcanvas from '@/assets/js/components/offcanvas.js'

export default {
  name: 'KTQuickUser',
  computed: {
    ROLES() {
      return ROLES
    },
  },
  mounted() {
    KTLayoutQuickUser.init(this.$refs.kt_quick_user)
  },
  methods: {
    async onLogout() {
      await this.$auth.logout()
      await this.$router.push('/login')
    },
    closeOffcanvas() {
      new KTOffcanvas(KTLayoutQuickUser.getElement()).hide()
    },
  },
}
</script>

<style lang="scss" scoped>
#kt_quick_user {
  overflow: hidden;
}
</style>
