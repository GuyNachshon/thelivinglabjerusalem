<template>
    <div class="active_hours">

        <div class="active_hours__content">
            <div class="active_hours__content__body">
                איזה כיף שאתן רוצות לבוא!<br>
                המעבדה פעילה בימי שישי בין מהשעה 10:00 ועד השעה 14:00,<br> וגם במהלך חופשות החגים<br><br>
                מוזיאון המדע ע״ש בלומפילד, ירושלים
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "openHoursModal"
}
</script>

<style scoped lang="scss">

$color-background: #151515;

* {
    box-sizing: border-box;
}

.active_hours__content {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;

    width: 600px;
    box-shadow: 0 0 0 1px white;
    border-radius: 100px;
    position: absolute;
    font-family: "Aktiv Grotesk", sans-serif;
    font-weight: 400;
    background: $color-background;
    height: 140px;

    margin-top: 14px;

    &__top {
        display: flex;
        justify-content: flex-end;
        fill: white;
        width: 100%;
        direction: rtl;

        &__img {
            width: 10px;
            padding: 6px;
        }
    }

    &__body {
        font-size: 16px;
        text-align: center;
    }
}

</style>